export type TagItemType = 'text' | 'color';

export interface TagItemValue {
  label: string
  hexColor?: string
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
}

export interface TagItemProps {
  modelValue: TagItemValue
  type?: TagItemType
}
