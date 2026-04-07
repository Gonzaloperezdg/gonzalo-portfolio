import { useState, useCallback, useEffect } from 'react';
import { usePaint } from '../../context/PaintContext';
import { BRUSH_SIZES, SIZE_TOOLS, type RectFill, type Tool } from '../../context/paintConstants';
import {
  MousePointer2, Pencil, Paintbrush, PaintBucket, Eraser,
  Minus, Square, Pipette, SprayCan, Type, Trash2, Zap,
  ChevronUp, ChevronDown
} from 'lucide-react';
import styles from './PaintToolbar.module.css';

const ICON_SIZE = 18;

/* Tools split into primary (always visible on mobile) and secondary (expandable) */
const PRIMARY_TOOLS = [
  { id: 'select',    Icon: MousePointer2, label: 'Navegar' },
  { id: 'pencil',    Icon: Pencil,        label: 'Lápiz' },
  { id: 'brush',     Icon: Paintbrush,    label: 'Pincel' },
  { id: 'fill',      Icon: PaintBucket,   label: 'Relleno' },
  { id: 'eraser',    Icon: Eraser,        label: 'Goma' },
] as const;

const SECONDARY_TOOLS = [
  { id: 'line',      Icon: Minus,         label: 'Línea' },
  { id: 'rectangle', Icon: Square,        label: 'Rectángulo' },
  { id: 'eyedrop',   Icon: Pipette,       label: 'Cuentagotas' },
  { id: 'spray',     Icon: SprayCan,      label: 'Aerosol' },
  { id: 'text',      Icon: Type,          label: 'Texto' },
] as const;

const ALL_TOOLS = [...PRIMARY_TOOLS, ...SECONDARY_TOOLS];

const PALETTE = [
  '#000000','#ffffff','#c0390b','#e8651a',
  '#0055aa','#009999','#2d6a2d','#883366',
  '#885500','#9c7c5a','#7b3f00','#3d1f0a',
];

export function PaintToolbar() {
  const {
    activeTool, setActiveTool,
    drawColor, setDrawColor,
    secondaryColor, setSecondaryColor,
    brushSizeIndex, setBrushSizeIndex,
    rectFill, setRectFill,
    triggerClear,
  } = usePaint();

  const [hexInput, setHexInput] = useState(drawColor.replace('#', ''));
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [pickingFor, setPickingFor] = useState<'primary' | 'secondary'>('primary');
  const [isVibrating, setIsVibrating] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showMobilePalette, setShowMobilePalette] = useState(false);

  // Hue para el customizer (0-360)
  const [hue, setHue] = useState(0);

  // Efecto global de vibración en el body para alcanzar al canvas
  useEffect(() => {
    if (isVibrating) {
      document.body.classList.add('is-vibrating');
    } else {
      document.body.classList.remove('is-vibrating');
    }
    return () => document.body.classList.remove('is-vibrating');
  }, [isVibrating]);

  const handleColorChange = useCallback((color: string) => {
    setDrawColor(color);
    setHexInput(color.replace('#', ''));
  }, [setDrawColor]);

  const handleHexSubmit = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = (e.target as HTMLInputElement).value;
      if (/^[0-9A-Fa-f]{6}$/.test(val)) setDrawColor('#' + val);
    }
  }, [setDrawColor]);

  const openCustomizer = (type: 'primary' | 'secondary') => {
    setPickingFor(type);
    setShowCustomizer(true);
  };

  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHue = parseInt(e.target.value);
    setHue(newHue);
    if (pickingFor === 'primary') handleColorChange(hslToHex(newHue, 100, 50));
    else setSecondaryColor(hslToHex(newHue, 100, 50));
  };

  useEffect(() => {
    setHexInput(drawColor.replace('#', ''));
  }, [drawColor]);

  // Show mobile palette when pencil or brush is selected
  const isColorTool = activeTool === 'pencil' || activeTool === 'brush';

  // Toggle palette on tool click for mobile
  const handleToolClick = (id: Tool) => {
    if (id === activeTool && (id === 'pencil' || id === 'brush')) {
      setShowMobilePalette(prev => !prev);
    } else {
      setActiveTool(id);
      if (id === 'pencil' || id === 'brush') {
        setShowMobilePalette(true);
      } else {
        setShowMobilePalette(false);
      }
    }
  };

  const [showTooltip, setShowTooltip] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    const handleScroll = () => setShowTooltip(false);
    window.addEventListener('scroll', handleScroll, { passive: true, once: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const showSizes = activeTool !== null && SIZE_TOOLS.includes(activeTool as NonNullable<typeof activeTool>);
  const showRect  = activeTool === 'rectangle';
  const sizes     = (activeTool && BRUSH_SIZES[activeTool]) ?? [1, 2, 3, 4];

  return (
    <aside className={styles.toolbar} aria-label="Herramientas de dibujo">
      {/* Zap Button (Motor de vida) */}
      <button
        className={`${styles.zapBtn} ${isVibrating ? styles.zapBtnActive : ''}`}
        onClick={() => setIsVibrating(!isVibrating)}
        title={isVibrating ? "Detener Motor" : "Cargar Vida"}
      >
        <Zap size={16} fill={isVibrating ? "currentColor" : "none"} />
      </button>

      <div className={styles.sep} style={{ opacity: 0.5 }} />

      {/* Custom Color Personalizer Panel */}
      {showCustomizer && (
        <div className={styles.customizer} onMouseLeave={() => setShowCustomizer(false)}>
          <span className={styles.customizerLabel}>Personalizar Color ({pickingFor === 'primary' ? '1' : '2'})</span>

          <div
            className={styles.spectrumArea}
            style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}
            title="Área de espectro"
          />

          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={handleHueChange}
            className={styles.hueSlider}
          />

          <input
            className={styles.hexInput}
            style={{ margin: 0 }}
            value={pickingFor === 'primary' ? drawColor : secondaryColor}
            onChange={e => pickingFor === 'primary' ? handleColorChange(e.target.value) : setSecondaryColor(e.target.value)}
            spellCheck={false}
          />

          <div className={styles.customizerFooter}>
            <button className={styles.customizerBtn} onClick={() => setShowCustomizer(false)}>OK</button>
          </div>
        </div>
      )}

      <div className={`${styles.tooltip} ${!showTooltip ? styles.tooltipHidden : ''}`} aria-hidden="true">
        Punta o explora <span role="img" aria-label="arte">🎨</span>
        <div className={styles.tooltipArrow} />
      </div>

      {/* ── MOBILE: Palette circles above toolbar ── */}
      {showMobilePalette && isColorTool && (
        <div className={styles.mobilePalette}>
          {PALETTE.map(color => (
            <button
              key={color}
              className={`${styles.mobilePaletteBtn} ${drawColor === color ? styles.mobilePaletteBtnActive : ''}`}
              style={{ background: color }}
              onClick={() => handleColorChange(color)}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      )}

      {/* ── MOBILE: Expanded secondary tools panel ── */}
      {expanded && (
        <div className={styles.mobileExpanded}>
          {SECONDARY_TOOLS.map(({ id, Icon, label }) => (
            <button
              key={id}
              className={`${styles.toolBtn} ${activeTool === id ? styles.active : ''}`}
              onClick={() => handleToolClick(id)}
              title={label}
              aria-label={label}
              aria-pressed={activeTool === id}
            >
              <Icon size={ICON_SIZE} />
            </button>
          ))}
        </div>
      )}

      {/* ── DESKTOP: All tools in grid ── */}
      <div className={styles.toolGrid}>
        {ALL_TOOLS.map(({ id, Icon, label }) => (
          <button
            key={id}
            className={`${styles.toolBtn} ${activeTool === id ? styles.active : ''}`}
            onClick={() => setActiveTool(id)}
            title={label}
            aria-label={label}
            aria-pressed={activeTool === id}
          >
            <Icon size={ICON_SIZE} />
          </button>
        ))}
      </div>

      {/* ── MOBILE: Primary tools row ── */}
      <div className={styles.mobileToolRow}>
        {PRIMARY_TOOLS.map(({ id, Icon, label }) => (
          <button
            key={id}
            className={`${styles.toolBtn} ${activeTool === id ? styles.active : ''}`}
            onClick={() => handleToolClick(id)}
            title={label}
            aria-label={label}
            aria-pressed={activeTool === id}
          >
            <Icon size={ICON_SIZE} />
          </button>
        ))}

        {/* Expand/collapse button */}
        <button
          className={`${styles.toolBtn} ${expanded ? styles.active : ''}`}
          onClick={() => setExpanded(!expanded)}
          title={expanded ? 'Menos herramientas' : 'Más herramientas'}
          aria-label={expanded ? 'Menos herramientas' : 'Más herramientas'}
        >
          {expanded ? <ChevronDown size={ICON_SIZE} /> : <ChevronUp size={ICON_SIZE} />}
        </button>

        {/* Trash */}
        <button
          className={styles.clearBtnMobile}
          onClick={triggerClear}
          title="Limpiar canvas"
          aria-label="Limpiar canvas"
        >
          <Trash2 size={ICON_SIZE} />
        </button>
      </div>

      {showSizes && (
        <>
          <div className={styles.sep} />
          <div className={styles.sizeGrid}>
            {[0, 1, 2, 3].map(i => (
              <button
                key={i}
                className={`${styles.sizeBtn} ${brushSizeIndex === i ? styles.sizeBtnActive : ''}`}
                onClick={() => setBrushSizeIndex(i)}
                aria-label={`Tamaño ${i + 1}`}
                title={`${sizes[i]}px`}
              >
                <span className={styles.sizeDot} style={{ width: 2 + i * 3, height: 2 + i * 3 }} />
              </button>
            ))}
          </div>
        </>
      )}

      {showRect && (
        <>
          <div className={styles.sep} />
          <div className={styles.rectOptions}>
            {(['outline', 'both', 'filled'] as RectFill[]).map(type => (
              <button
                key={type}
                className={`${styles.rectBtn} ${rectFill === type ? styles.rectBtnActive : ''}`}
                onClick={() => setRectFill(type)}
                aria-label={type}
                title={type}
              >
                <RectPreview type={type} />
              </button>
            ))}
          </div>
        </>
      )}

      <div className={styles.sep} />

      <div className={styles.swatchZone}>
        <button
          className={`${styles.swatch} ${styles.swatchSecondary}`}
          style={{ background: secondaryColor }}
          title="Color secundario"
          aria-label="Color secundario"
          onClick={() => setSecondaryColor(drawColor)}
          onDoubleClick={() => openCustomizer('secondary')}
        />
        <button
          className={`${styles.swatch} ${styles.swatchPrimary}`}
          style={{ background: drawColor }}
          title="Color primario"
          aria-label="Color primario"
          onDoubleClick={() => openCustomizer('primary')}
        />
      </div>

      <input
        className={styles.hexInput}
        value={hexInput}
        onChange={e => setHexInput(e.target.value)}
        onKeyDown={handleHexSubmit}
        maxLength={6}
        spellCheck={false}
        aria-label="Color hex"
      />

      <div className={styles.sep} />

      <div className={styles.palette}>
        {PALETTE.map(color => (
          <button
            key={color}
            className={`${styles.colorBtn} ${drawColor === color ? styles.colorActive : ''}`}
            style={{ background: color }}
            onClick={() => handleColorChange(color)}
            onContextMenu={e => { e.preventDefault(); setSecondaryColor(color); }}
            onDoubleClick={() => { handleColorChange(color); openCustomizer('primary'); }}
            title={`${color} (Doble clic para editar)`}
            aria-label={`Color ${color}`}
          />
        ))}
      </div>

      <div className={styles.sep} />

      <button
        className={styles.clearBtn}
        onClick={triggerClear}
        title="Limpiar canvas (Ctrl+Z para deshacer)"
        aria-label="Limpiar canvas"
      >
        <Trash2 size={ICON_SIZE} />
        <span aria-hidden="true">Clear</span>
      </button>

      {/* Fix 14: SVG Filter solo se renderiza cuando está activo */}
      {isVibrating && (
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
          <filter id="jitter-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" result="noise" seed="1">
              <animate attributeName="seed" values="1;20;40;60;80;100" dur="0.1s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </svg>
      )}

    </aside>
  );
}

/** Utility: Transforma HSL a Hex para mantener compatibilidad */
function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}


function RectPreview({ type }: { type: RectFill }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" style={{ imageRendering: 'pixelated' }}>
      {(type === 'both' || type === 'filled') && (
        <rect x="1" y="1" width="16" height="10" fill="currentColor" opacity="0.4" />
      )}
      {(type === 'both' || type === 'outline') && (
        <rect x="1" y="1" width="16" height="10" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}
