export interface DropdownItemType {
  label: string
  key: string | number
  groupName?: string
}

export interface DropdownItemProps {
  item: DropdownItemType
  multiple?: boolean
  selected?: boolean
}

export interface DropdownProps {
  modelValue: DropdownItemType | DropdownItemType[] | null
  placeholder?: string
  items: DropdownItemType[]
  multiple?: boolean
}
