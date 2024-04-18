import type { DropdownValue } from '../Dropdown/types';

export type TagItemType = 'text' | 'color' | 'dropdown';

export interface TagItemValue {
  label: string
  hexColor?: string
  key?: number | string
}

export interface UniqueTagItem extends TagItemValue {
  id: string
}

export interface TagProps {
  modelValue: TagItemValue[]
  type?: TagItemType
  max?: number
  placeholder?: string
  disabled?: boolean
  error?: boolean
  items?: DropdownValue[]
  searchable?: boolean
}

export interface TagItemProps {
  modelValue: TagItemValue
  type?: TagItemType
}
