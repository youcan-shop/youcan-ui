export interface DropdownItemType {
  label: string
  value: string | number
}

export interface DropdownItemProps {
  item: DropdownItemType
  multiple?: boolean
}

export interface DropdownProps {
  placeholder?: string
  items: DropdownItemType[]
}
