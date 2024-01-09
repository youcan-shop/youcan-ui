export interface RadioData {
  label: string
  value: unknown
}

export interface RadioProps {
  modelValue?: boolean
  name?: string
}

export interface RadioGroupProps {
  items: RadioData[]
  name: string
  modelValue?: RadioData['value']
}
