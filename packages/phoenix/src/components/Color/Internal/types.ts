import type { HSV, RGBA } from '@youcan/ui-core';

export interface AlphaProps {
  color: string
  rgba: RGBA
  height: number
  width: number
}

export interface BackdropProps {
  color: string
  width: number
  height: number
}

export interface HueProps {
  hsv: HSV
  width: number
  height: number
}

export interface OverrideProps {
  color: string
}

export interface SaturationProps {
  color: string
  hsv: HSV
  size: number
}

export interface SwatchesProps {
  color: string
  defaultSwatches: string[]
}
