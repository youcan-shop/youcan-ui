export type Orientation = 'horizontal' | 'vertical';

export type Thickness = 'light' | 'regular' | 'thick';

export interface DividerProps {
  orientation?: Orientation
  dashed?: boolean
  thickness?: Thickness
}
