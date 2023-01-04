import type { IntegerRange } from '../utils/type';

export interface RGB {
  r: IntegerRange<0, 255>
  g: IntegerRange<0, 255>
  b: IntegerRange<0, 255>
}
export interface RGBA extends RGB {
  a: number
}

export interface HSV {
  h: IntegerRange<0, 300>
  s: number
  v: number
}

export interface ColorObject {
  rgba: RGBA
  hsv: HSV
  hex: string
  hexa: string
}
