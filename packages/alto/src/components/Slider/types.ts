type SliderType = 'number' | 'range';
export interface RangeValue {
  min: number
  max: number
}

interface Props {
  modelValue?: number | RangeValue
  min: number
  max: number
  disabled?: boolean
  type?: SliderType
}

export interface RailProps extends Props {
  modelValue?: number | RangeValue
  minLabel?: string
  maxLabel?: string
}

export interface SliderProps extends Props {
  prefix?: string
  suffix?: string
}
