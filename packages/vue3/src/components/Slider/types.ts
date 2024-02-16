export interface RailProps {
  modelValue?: number
  label?: string
  min: number
  max: number
  disabled?: boolean
}

export interface SliderProps {
  modelValue?: number
  min?: number
  max?: number
  disabled?: boolean
  prefix?: string
  suffix?: string
}
