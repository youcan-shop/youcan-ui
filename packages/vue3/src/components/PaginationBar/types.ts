export interface PaginationBarProps {
  count: number | string
  total: number
  current: number
  size: number
  hidePerPage?: boolean
  previousLabel?: string
  nextLabel?: string
  perPageLabel?: string
}

export interface NavigationButtonProps {
  current: number
  index: number | string
}
