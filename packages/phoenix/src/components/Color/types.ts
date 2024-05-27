export interface ColorPickerProps {
  modelValue: string
  swatches?: string[]
  preserveTransparency?: boolean
}

export interface ColorInputProps {
  modelValue?: string
  disabled?: boolean
  error?: boolean
  preserveTransparency?: boolean
}
