interface DropdownItem<T> {
  value: T
  label: string
}

interface DropdownItemWithIcon<T> extends DropdownItem<T> {
  icon?: string
  image?: never | undefined
}

interface DropdownItemWithImage<T> extends DropdownItem<T> {
  icon?: never | undefined
  image?: string
}

export type DropdownItemDefinition<T = any> = DropdownItemWithIcon<T> | DropdownItemWithImage<T>;

export type DropdownItemArray<T = any> = DropdownItemDefinition<T>[];

export type DropdownItemGroups<T = any> = Record<string, DropdownItemArray<T>>;

export type { DropdownItemWithIcon };
export type { DropdownItemWithImage };

export interface DropdownItemProps {
  selected: boolean
  checkbox?: boolean
  item: DropdownItemDefinition
}

export interface DropdownProps {
  size?: 36 | 44
  icon?: string
  placeholder: string
  searchable?: boolean
  modelValue: DropdownItemDefinition | null
  items: DropdownItemArray | DropdownItemGroups
  disabled?: boolean
  loading?: boolean
  searchHandler?: (searchTerm: string, items?: DropdownItemArray | DropdownItemGroups) => void
}

export interface DropdownListProps {
  selected: DropdownItemArray | DropdownItemDefinition | null
  items: DropdownItemArray | DropdownItemGroups
  searchable?: boolean
  loading?: boolean
  multiple?: boolean
  show?: boolean
  searchHandler?: (searchTerm: string, items?: DropdownItemArray | DropdownItemGroups) => void
}

export interface MultiselectDropdownProps {
  icon?: string
  label: string
  searchable?: boolean
  loading?: boolean
  modelValue: DropdownItemDefinition[]
  items: DropdownItemArray | DropdownItemGroups
}
