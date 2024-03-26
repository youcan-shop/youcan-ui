export type Orientation = 'horizontal' | 'vertical';

export type Style = 'solid' | 'dotted' | 'dashed';

export type Thickness = 'light' | 'regular' | 'thick';

export interface DividerProps {
  orientation?: Orientation
  borderStyle?: Style
  thickness?: Thickness
}
