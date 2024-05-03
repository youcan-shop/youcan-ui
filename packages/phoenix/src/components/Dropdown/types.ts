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

export interface DropdownGroupNameProps {
  name: string
  multiple?: boolean
  selected?: boolean
  indeterminate?: boolean
}

export interface DropdownCommonProps {
  searchable?: boolean
  searchInputPlaceholder?: string
  search?: (value: string) => void
  items: DropdownValue[]
  isLoading?: boolean
}
export interface DropdownProps extends DropdownCommonProps {
  modelValue: DropdownValue | DropdownValue[] | null
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
  multiSelectLabel?: string
  clearable?: boolean
  noDataText?: string
  limit?: number
}
