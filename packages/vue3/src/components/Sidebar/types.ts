export interface SidebarProps {
  collapsed?: boolean
}

export interface SidebarItemProps {
  icon: string
  label: string
  count?: number
  active?: boolean
}

export interface SidebarSubItemProps {
  label: string
  active?: boolean
}
