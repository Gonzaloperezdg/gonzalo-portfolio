// Constants for paint context - exported separately to avoid react-refresh/only-export-components issues

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
