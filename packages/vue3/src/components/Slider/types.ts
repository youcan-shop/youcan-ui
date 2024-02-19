type SliderType = 'number' | 'range';
export interface RangeValue {
  min: number
  max: number
}
export interface RailProps {
  modelValue?: number
  minLabel?: string
  maxLabel?: string
  min: number
  max: number
  minValue: number
  maxValue: number
  disabled?: boolean
  type?: SliderType
}

export interface SliderProps {
  modelValue?: number
  min?: number
  max?: number
  disabled?: boolean
  prefix?: string
  suffix?: string
  type?: SliderType
}
