export interface SidebarStyleProps {
  backgroundColor?: string
  width?: number
  hoverColor?: string
  activeColor?: string
  iconColor?: string
  subItemIconColor?: string
  font?: string
  spacing?: number
}
export interface SidebarProps {
  collapsed?: boolean
  styleConfig?: SidebarStyleProps
}

export interface ItemStyleProps {
  activeMarkColor?: string
  hoverColor?: string
  activeColor?: string
  iconColor?: string
  activeIconColor?: string
  labelColor?: string
  activeLabelColor?: string
  font?: string
}

export interface SidebarItemProps {
  icon?: string
  label: string
  active?: boolean
  children?: SidebarItemProps[]
  url?: string
  styleConfig?: ItemStyleProps
}

export interface SubItemStyleProps {
  labelColor?: string
  activeLabelColor?: string
  font?: string
}
export interface SidebarSubItemProps {
  label: string
  active?: boolean
  styleConfig?: SubItemStyleProps
}
