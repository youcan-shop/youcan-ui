interface DropdownItem<T> {
  value: T
  label: string
  selected: boolean
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
