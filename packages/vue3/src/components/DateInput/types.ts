export interface DateInputValue {
  start?: Date
  end?: Date
}
export interface DateInputProps {
  modelValue: DateInputValue
  disabled?: boolean
}

export interface DatePickerProps {
  modelValue: DateInputValue
}
