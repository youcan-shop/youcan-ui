export interface GroupSelectItem extends SelectItem {
  subItems?: SelectItem[]
}

interface SelectItem {
  icon?: string
  label: string
  value: string
}
