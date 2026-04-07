import { useRef, useEffect, useCallback, useState } from 'react';
import {
  usePaint, BRUSH_SIZES, PIXEL_MODES,
  type Tool, type RectFill, type PixelMode,
} from '../../context/PaintContext';
import styles from './DrawingCanvas.module.css';

const MAX_HISTORY = 40;

// ─── Helpers ──────────────────────────────────────────────────

function hexToRgba(hex: string): [number, number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b, 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function pickColor(ctx: CanvasRenderingContext2D, x: number, y: number): string {
  const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
  if (pixel[3] === 0) return '#000000';
  return rgbToHex(pixel[0], pixel[1], pixel[2]);
}

function floodFill(
  ctx: CanvasRenderingContext2D,
  startX: number, startY: number,
  fillColor: [number, number, number, number]
) {
  const { width, height } = ctx.canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const idx = (x: number, y: number) => (y * width + x) * 4;
  const si = idx(startX, startY);
  const target = [data[si], data[si+1], data[si+2], data[si+3]];
  if (target.every((v, i) => v === fillColor[i])) return;

  const stack: [number, number][] = [[startX, startY]];
  const visited = new Uint8Array(width * height);
  while (stack.length) {
    const [x, y] = stack.pop()!;
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const i = idx(x, y); const vi = y * width + x;
    if (visited[vi]) continue;
    if (data[i]!==target[0]||data[i+1]!==target[1]||data[i+2]!==target[2]||data[i+3]!==target[3]) continue;
    visited[vi] = 1;
    data[i]=fillColor[0]; data[i+1]=fillColor[1]; data[i+2]=fillColor[2]; data[i+3]=fillColor[3];
    stack.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
  }
  ctx.putImageData(imageData, 0, 0);
}

/** Bresenham — líneas pixel-perfect para lápiz */
function bresenham(
  ctx: CanvasRenderingContext2D,
  x0: number, y0: number, x1: number, y1: number,
  color: string, size: number, erase = false
) {
  x0=Math.round(x0); y0=Math.round(y0);
  x1=Math.round(x1); y1=Math.round(y1);
  const dx=Math.abs(x1-x0), dy=Math.abs(y1-y0);
  const sx=x0<x1?1:-1, sy=y0<y1?1:-1;
  let err=dx-dy;
  if (erase) { ctx.globalCompositeOperation='destination-out'; ctx.fillStyle='rgba(0,0,0,1)'; }
  else       { ctx.globalCompositeOperation='source-over';     ctx.fillStyle=color; }
  const h=Math.floor(size/2);
  while(true) {
    ctx.fillRect(x0-h, y0-h, size, size);
    if(x0===x1&&y0===y1) break;
    const e2=2*err;
    if(e2>-dy){err-=dy; x0+=sx;}
    if(e2<dx) {err+=dx; y0+=sy;}
  }
}

/** Brush suave — trazos con lineCap round */
function brushStroke(
  ctx: CanvasRenderingContext2D,
  from: {x:number;y:number}, to: {x:number;y:number},
  color: string, size: number, erase = false
) {
  ctx.imageSmoothingEnabled = false;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  if (erase) { ctx.globalCompositeOperation='destination-out'; ctx.strokeStyle='rgba(0,0,0,1)'; }
  else       { ctx.globalCompositeOperation='source-over';     ctx.strokeStyle=color; }
  ctx.lineWidth = size;
  ctx.beginPath(); ctx.moveTo(from.x,from.y); ctx.lineTo(to.x,to.y); ctx.stroke();
}

/** Línea recta — square cap para pixel art */
function drawStraightLine(
  ctx: CanvasRenderingContext2D,
  x0:number,y0:number,x1:number,y1:number,
  color:string,size:number,erase=false
) {
  ctx.imageSmoothingEnabled=false;
  ctx.lineCap='square'; ctx.lineJoin='miter';
  if(erase){ctx.globalCompositeOperation='destination-out';ctx.strokeStyle='rgba(0,0,0,1)';}
  else     {ctx.globalCompositeOperation='source-over';    ctx.strokeStyle=color;}
  ctx.lineWidth=size;
  ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();
}

function drawSpray(
  ctx: CanvasRenderingContext2D,
  x:number,y:number,color:string,radius:number,density=30
) {
  ctx.globalCompositeOperation='source-over'; ctx.fillStyle=color;
  for(let i=0;i<density;i++){
    const a=Math.random()*Math.PI*2, r=Math.random()*radius;
    ctx.fillRect(Math.round(x+Math.cos(a)*r),Math.round(y+Math.sin(a)*r),1,1);
  }
}

function getSize(tool: Tool, idx: number): number {
  return (tool && BRUSH_SIZES[tool]?.[idx]) ?? 2;
}

// ─── Component ────────────────────────────────────────────────

interface TextState {
  visible: boolean;
  x: number; y: number;       // canvas coords for rendering
  cssX: number; cssY: number;  // fixed-position for the <input>
  value: string;
}

export function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    activeTool, drawColor, setDrawColor,
    secondaryColor,
    brushSizeIndex, rectFill,
    pixelMode,
    clearTrigger,
  } = usePaint();

  const drawing     = useRef(false);
  const lastPos     = useRef<{x:number;y:number}|null>(null);
  const startPos    = useRef<{x:number;y:number}|null>(null);
  const snapshotRef = useRef<ImageData|null>(null);
  const sprayTimer  = useRef<number|null>(null);
  const historyRef  = useRef<ImageData[]>([]);
  const shiftHeld   = useRef(false);

  const [textState, setTextState] = useState<TextState>({
    visible: false, x: 0, y: 0, cssX: 0, cssY: 0, value: '',
  });

  // ─── Helper: logical size from pixelMode ────────────────────
  const getLogicalSize = (mode: PixelMode) => {
    const found = PIXEL_MODES.find(m => m.id === mode)!;
    return {
      w: found.w ?? window.innerWidth,
      h: found.h ?? window.innerHeight,
    };
  };

  // ─── Aplica nuevo tamaño preservando el dibujo escalado ──────
  const applySize = useCallback((canvas: HTMLCanvasElement, newW: number, newH: number) => {
    const ctx = canvas.getContext('2d')!;
    const prevW = canvas.width, prevH = canvas.height;

    // Capturar dibujo actual
    let tmp: HTMLCanvasElement | null = null;
    if (prevW > 0 && prevH > 0) {
      tmp = document.createElement('canvas');
      tmp.width = prevW; tmp.height = prevH;
      tmp.getContext('2d')!.putImageData(ctx.getImageData(0, 0, prevW, prevH), 0, 0);
    }

    canvas.width  = newW;
    canvas.height = newH;
    const ctx2 = canvas.getContext('2d')!;
    ctx2.imageSmoothingEnabled = false;
    if (tmp) ctx2.drawImage(tmp, 0, 0, newW, newH);
  }, []);

  // ─── Resize (solo en modo 'full') ────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { w, h } = getLogicalSize(pixelMode);
    applySize(canvas, w, h);

    if (pixelMode !== 'full') return; // modos fijos no reaccionan al resize

    const onResize = () => {
      const { w: nw, h: nh } = getLogicalSize('full');
      applySize(canvas, nw, nh);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pixelMode]);

  // ─── Clear ───────────────────────────────────────────────────
  useEffect(() => {
    if (clearTrigger === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    pushHistory();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTrigger]);

  // ─── Keyboard: Ctrl+Z · Shift ────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') { shiftHeld.current = true; return; }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        const h = historyRef.current;
        if (!h.length) return;
        const prev = h.pop()!;
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) { ctx.imageSmoothingEnabled = false; ctx.putImageData(prev, 0, 0); }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => { if (e.key === 'Shift') shiftHeld.current = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup',   onKeyUp);
    };
  }, []);

  // ─── History ─────────────────────────────────────────────────
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const h = historyRef.current;
    if (h.length >= MAX_HISTORY) h.shift();
    h.push(snap);
  }, []);

  // ─── Commit texto al canvas ──────────────────────────────────
  const commitText = useCallback(() => {
    setTextState(s => {
      if (!s.visible || !s.value.trim()) return { ...s, visible: false, value: '' };
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx) return { ...s, visible: false, value: '' };
      pushHistory();
      const fontSize = getSize('text', brushSizeIndex);
      ctx.imageSmoothingEnabled = false;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = drawColor;
      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.fillText(s.value, s.x, s.y + fontSize);
      return { ...s, visible: false, value: '' };
    });
  }, [brushSizeIndex, drawColor, pushHistory]);

  // Coordenadas de pantalla → coordenadas lógicas del canvas (escala pixelMode)
  const getPos = (e: { clientX: number; clientY: number }) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: e.clientX, y: e.clientY };
    return {
      x: e.clientX * (canvas.width  / window.innerWidth),
      y: e.clientY * (canvas.height / window.innerHeight),
    };
  };

  const stopSpray = useCallback(() => {
    if (sprayTimer.current !== null) { clearInterval(sprayTimer.current); sprayTimer.current = null; }
  }, []);


  // ─── Pointer DOWN ─────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeTool || activeTool === 'select') return;

    // Commit any open text first
    if (textState.visible) { commitText(); return; }

    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const pos = getPos(e);
    const isRightClick = e.button === 2;
    const color = isRightClick ? secondaryColor : drawColor;

    drawing.current  = true;
    lastPos.current  = pos;
    startPos.current = pos;

    if (activeTool === 'eyedrop') {
      setDrawColor(pickColor(ctx, pos.x, pos.y));
      drawing.current = false;
      return;
    }

    if (activeTool === 'text') {
      setTextState({ visible: true, x: pos.x, y: pos.y, cssX: e.clientX, cssY: e.clientY, value: '' });
      drawing.current = false;
      return;
    }

    pushHistory();

    if (activeTool === 'fill') {
      floodFill(ctx, Math.floor(pos.x), Math.floor(pos.y), hexToRgba(color));
      drawing.current = false;
      return;
    }

    ctx.imageSmoothingEnabled = false;
    const sz = getSize(activeTool, brushSizeIndex);

    if (activeTool === 'spray') {
      drawSpray(ctx, pos.x, pos.y, color, sz);
      sprayTimer.current = window.setInterval(() => {
        if (lastPos.current) drawSpray(ctx, lastPos.current.x, lastPos.current.y, color, sz);
      }, 30);
      return;
    }

    // Save snapshot for: line, rect, shift-constrained strokes
    snapshotRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (activeTool === 'pencil') {
      if (!shiftHeld.current) bresenham(ctx, pos.x, pos.y, pos.x, pos.y, color, sz);
    } else if (activeTool === 'brush') {
      if (!shiftHeld.current) brushStroke(ctx, pos, pos, color, sz);
    } else if (activeTool === 'eraser') {
      if (!shiftHeld.current) bresenham(ctx, pos.x, pos.y, pos.x, pos.y, color, sz, true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTool, brushSizeIndex, drawColor, secondaryColor, textState.visible, commitText, pushHistory, setDrawColor]);

  // ─── Pointer MOVE ─────────────────────────────────────────────
  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const pos = getPos(e);
    if (!drawing.current || !activeTool) { lastPos.current = pos; return; }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const isRightClick = e.buttons === 2;
    const color = isRightClick ? secondaryColor : drawColor;
    const sz = getSize(activeTool, brushSizeIndex);
    ctx.imageSmoothingEnabled = false;

    const isStroke = activeTool === 'pencil' || activeTool === 'brush' || activeTool === 'eraser';

    if (isStroke && shiftHeld.current && snapshotRef.current && startPos.current) {
      ctx.putImageData(snapshotRef.current, 0, 0);
      drawStraightLine(ctx, startPos.current.x, startPos.current.y, pos.x, pos.y,
        color, sz, activeTool === 'eraser');
    } else if (isStroke && !shiftHeld.current && lastPos.current) {
      if (activeTool === 'pencil') bresenham(ctx, lastPos.current.x, lastPos.current.y, pos.x, pos.y, color, sz);
      else if (activeTool === 'brush')  brushStroke(ctx, lastPos.current, pos, color, sz);
      else if (activeTool === 'eraser') bresenham(ctx, lastPos.current.x, lastPos.current.y, pos.x, pos.y, color, sz, true);
    }

    if (activeTool === 'spray' && lastPos.current) {
      const dx=pos.x-lastPos.current.x, dy=pos.y-lastPos.current.y;
      const dist=Math.sqrt(dx*dx+dy*dy), steps=Math.max(1,Math.floor(dist/5));
      for(let i=1;i<=steps;i++)
        drawSpray(ctx, lastPos.current.x+(dx*i)/steps, lastPos.current.y+(dy*i)/steps, color, sz);
    }

    if ((activeTool==='line'||activeTool==='rectangle') && snapshotRef.current && startPos.current) {
      ctx.putImageData(snapshotRef.current, 0, 0);
      ctx.globalCompositeOperation='source-over';
      ctx.strokeStyle=color; ctx.lineWidth=sz;
      ctx.lineCap='square'; ctx.lineJoin='miter';
      if (activeTool==='line') {
        ctx.beginPath(); ctx.moveTo(startPos.current.x,startPos.current.y); ctx.lineTo(pos.x,pos.y); ctx.stroke();
      } else {
        const w=pos.x-startPos.current.x, h=pos.y-startPos.current.y;
        if (rectFill==='filled'||rectFill==='both') {
          ctx.globalAlpha=0.4; ctx.fillStyle=color;
          ctx.fillRect(startPos.current.x,startPos.current.y,w,h);
          ctx.globalAlpha=1;
        }
        if (rectFill==='outline'||rectFill==='both')
          ctx.strokeRect(startPos.current.x,startPos.current.y,w,h);
      }
    }

    lastPos.current = pos;
  }, [activeTool, brushSizeIndex, drawColor, secondaryColor, rectFill]);

  // ─── Pointer UP ──────────────────────────────────────────────
  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const pos = getPos(e);
    const isRightClick = e.button === 2;
    const color = isRightClick ? secondaryColor : drawColor;
    const sz = getSize(activeTool, brushSizeIndex);
    const isStroke = activeTool==='pencil'||activeTool==='brush'||activeTool==='eraser';

    if (ctx && canvas && isStroke && shiftHeld.current && snapshotRef.current && startPos.current) {
      ctx.imageSmoothingEnabled = false;
      ctx.putImageData(snapshotRef.current, 0, 0);
      drawStraightLine(ctx, startPos.current.x, startPos.current.y, pos.x, pos.y,
        color, sz, activeTool==='eraser');
    }

    drawing.current = false;
    lastPos.current = null; startPos.current = null; snapshotRef.current = null;
    stopSpray();
  }, [activeTool, brushSizeIndex, drawColor, secondaryColor, stopSpray]);

  const onPointerLeave = useCallback(() => {
    drawing.current = false;
    lastPos.current = null;
    stopSpray();
  }, [stopSpray]);

  const getCursor = () => {
    switch (activeTool) {
      case 'eyedrop': return 'crosshair';
      case 'fill':    return 'cell';
      case 'eraser':  return 'cell';
      case 'text':    return 'text';
      case 'select':  return 'default';
      default:        return 'crosshair';
    }
  };

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div
        className={`${styles.overlay} ${(activeTool && activeTool !== 'select') ? styles.active : ''}`}
        style={{ cursor: activeTool ? getCursor() : 'default' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        onContextMenu={e => e.preventDefault()}
      />
      {/* Input flotante para herramienta texto */}
      {textState.visible && (
        <input
          autoFocus
          className={styles.textInput}
          style={{
            left:     textState.cssX,
            top:      textState.cssY,
            fontSize: getSize('text', brushSizeIndex),
            color:    drawColor,
          }}
          value={textState.value}
          onChange={e => setTextState(s => ({ ...s, value: e.target.value }))}
          onKeyDown={e => {
            if (e.key === 'Enter')  commitText();
            if (e.key === 'Escape') setTextState(s => ({ ...s, visible: false, value: '' }));
          }}
          onBlur={commitText}
        />
      )}
    </>
  );
}
