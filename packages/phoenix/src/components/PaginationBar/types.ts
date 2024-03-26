export interface PaginationBarProps {
  count: number | string
  total: number
  current: number
  size: number
  hidePerPage?: boolean
  previousLabel?: string
  nextLabel?: string
  perPageLabel?: string
  perPage?: number
  perPageOptions?: number[]
}

export interface NavigationButtonProps {
  current: number
  index: number | string
}
