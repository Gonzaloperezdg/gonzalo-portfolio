import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Tool =
  | 'pencil' | 'brush' | 'eraser' | 'fill'
  | 'line' | 'rectangle' | 'text' | 'select'
  | 'eyedrop' | 'spray'
  | null;

export type RectFill  = 'outline' | 'both' | 'filled';
export type PixelMode = 'full' | '640' | '480' | '320';

export const PIXEL_MODES: { id: PixelMode; label: string; w: number | null; h: number | null }[] = [
  { id: 'full', label: 'FUL', w: null, h: null },
  { id: '640',  label: '640', w: 640, h: 360  },
  { id: '480',  label: '480', w: 480, h: 270  },
  { id: '320',  label: '320', w: 320, h: 180  },
];

// ─── Brush sizes por herramienta (4 opciones) ─────────────────
export const BRUSH_SIZES: Partial<Record<NonNullable<Tool>, number[]>> = {
  pencil:    [1, 2, 3, 4],
  brush:     [3, 5, 8, 12],
  eraser:    [6, 10, 16, 24],
  spray:     [8, 14, 20, 30],
  line:      [1, 2, 3, 4],
  rectangle: [1, 2, 3, 4],
  text:      [12, 16, 20, 28],
};

export const SIZE_TOOLS: NonNullable<Tool>[] =
  ['pencil', 'brush', 'eraser', 'spray', 'line', 'rectangle', 'text'];

// ─── Context ──────────────────────────────────────────────────
interface PaintContextType {
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;
  drawColor: string;
  setDrawColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
  brushSizeIndex: number;
  setBrushSizeIndex: (i: number) => void;
  rectFill: RectFill;
  setRectFill: (f: RectFill) => void;
  pixelMode: PixelMode;
  setPixelMode: (m: PixelMode) => void;
  clearTrigger: number;
  triggerClear: () => void;
}

const PaintContext = createContext<PaintContextType | null>(null);

export function PaintProvider({ children }: { children: ReactNode }) {
  const [activeTool,     setActiveToolState] = useState<Tool>(null);
  const [drawColor,      setDrawColor]       = useState('#000000');
  const [secondaryColor, setSecondaryColor]  = useState('#ffffff');
  const [brushSizeIndex, setBrushSizeIndex]  = useState(0);
  const [rectFill,       setRectFill]        = useState<RectFill>('outline');
  const [pixelMode,      setPixelMode]       = useState<PixelMode>('640');
  const [clearTrigger,   setClearTrigger]    = useState(0);

  const setActiveTool = useCallback((tool: Tool) => {
    setActiveToolState(prev => (prev === tool ? null : tool));
  }, []);

  const triggerClear = useCallback(() => {
    setClearTrigger(n => n + 1);
  }, []);

  return (
    <PaintContext.Provider value={{
      activeTool, setActiveTool,
      drawColor, setDrawColor,
      secondaryColor, setSecondaryColor,
      brushSizeIndex, setBrushSizeIndex,
      rectFill, setRectFill,
      pixelMode, setPixelMode,
      clearTrigger, triggerClear,
    }}>
      {children}
    </PaintContext.Provider>
  );
}

export function usePaint() {
  const ctx = useContext(PaintContext);
  if (!ctx) throw new Error('usePaint must be used within PaintProvider');
  return ctx;
}
