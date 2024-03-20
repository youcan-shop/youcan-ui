export interface IncrementMachineValue {
  value: string
  valueAsNumber: number
}

export interface IncrementProps {
  modelValue: string
  max?: number
  min?: number
  step?: number
  id?: string
  disabled?: boolean
}
