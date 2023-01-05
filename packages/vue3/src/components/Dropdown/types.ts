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
