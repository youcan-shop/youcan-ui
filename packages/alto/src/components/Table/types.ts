export interface TableColumn {
  label?: string
  key?: string
  sortable?: boolean
  order?: 'none' | 'desc' | 'asc'
}

export interface SelectQuery {
  all?: boolean
  included?: Array<string>
  excluded?: Array<string>
}
export interface TableProps<T> {
  tableColumns?: Array<TableColumn>
  items?: Array<T>
  selectable?: boolean
  tableId: string
}
