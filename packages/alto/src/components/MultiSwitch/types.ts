export interface SwitchButtonOption {
  label: string
  icon?: string
  value: string | number
  disabled?: boolean
}

export interface MultiSwitchProps {
  options: SwitchButtonOption[]
  modelValue: SwitchButtonOption
}

export interface SwitchButtonProps {
  active?: boolean
  option: SwitchButtonOption
}
