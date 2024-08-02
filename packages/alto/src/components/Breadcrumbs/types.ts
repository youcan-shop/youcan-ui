export interface BreadcrumbItemProps {
  label: string
  to: string
  isCurrent: boolean
}
export interface BreadcrumbDropdownItemProps {
  label: string
  to: string
  isDropdown?: boolean
  dropdownItems?: BreadcrumbDropdownItemProps[]
}

export interface BreadcrumbsProps {
  items: BreadcrumbDropdownItemProps[]
  maxVisibleItems?: number
}
