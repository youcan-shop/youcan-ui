export type HTMLInputTypeAttribute = 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export interface InputProps {
  type?: HTMLInputTypeAttribute
  modelValue: string | number
  error?: boolean
  canShow?: boolean
  uid?: string
}

export interface InputGroupProps {
  error?: string
  label?: string
  labelFor?: string
}
