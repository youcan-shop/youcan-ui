export interface GroupSelectItem extends SelectItem {
  subItems?: SelectItem[]
}

export interface SelectItem {
  icon?: string
  label: string
  value: string
}
