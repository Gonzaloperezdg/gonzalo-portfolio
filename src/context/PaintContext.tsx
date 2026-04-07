import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { type Tool, type RectFill, type PixelMode } from './paintConstants';

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

// eslint-disable-next-line react-refresh/only-export-components
export function usePaint() {
  const ctx = useContext(PaintContext);
  if (!ctx) throw new Error('usePaint must be used within PaintProvider');
  return ctx;
}

// Re-export types and constants for backward compatibility
export type { Tool, RectFill, PixelMode } from './paintConstants';
export { PIXEL_MODES, BRUSH_SIZES, SIZE_TOOLS } from './paintConstants';
