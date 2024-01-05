import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from '../Dropdown/types';

export type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

export interface InputProps {
  type?: HTMLInputTypeAttribute
  modelValue: string
  error?: boolean
}

export interface DropdownPrefixProps {
  placeholder: string
  searchable?: boolean
  modelValue: DropdownItemDefinition | null
  items: DropdownItemArray | DropdownItemGroups
}
