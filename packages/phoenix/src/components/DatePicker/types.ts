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

export interface SingleDatePickerProps {
  modelValue: Date
}

export interface SingleDateInputProps {
  modelValue: Date
  disabled?: boolean
}
