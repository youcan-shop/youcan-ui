import type { ButtonIconPosition, ButtonSize, TableActions, TableColumn, TableData, TableDataRow, TableInternalData } from '~/types';

export interface TableButtonProps {
  label: string
  iconName?: string
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}

export interface LinkProps {
  href: string
  label: string
  target?: string
}

export interface TableRowProps {
  row: TableInternalData
  columns: TableColumn[]
  actions?: TableActions[]
  index: number
  selected?: boolean
  expended?: boolean
  isChild?: boolean
  data: TableData[]
  originalRow?: TableDataRow
}
