export interface DropdownValue {
  label: string
  key: string | number
  groupName?: string
}

export interface DropdownItemProps {
  item: DropdownValue
  multiple?: boolean
  selected?: boolean
}

export interface DropdownProps {
  modelValue: DropdownValue | DropdownValue[] | null
  placeholder?: string
  items: DropdownValue[]
  multiple?: boolean
  disabled?: boolean
  multiSelectLabel?: string
  isLoading?: boolean
  clearable?: boolean
  noDataText?: string
  limit?: number
}
