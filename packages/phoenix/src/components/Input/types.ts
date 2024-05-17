export type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

export interface InputProps {
  type?: HTMLInputTypeAttribute
  modelValue: string | number
  error?: boolean
  canShow?: boolean
}

export interface InputGroupProps {
  error?: string
  label?: string
  labelFor?: string
}
