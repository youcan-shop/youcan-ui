export interface RadioListOption {
  label: string
  suffix: string
}

export type RadioList = RadioListOption[];

export interface RadioListProps {
  modelValue?: RadioListOption
  options: RadioList
}
