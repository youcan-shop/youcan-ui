export interface TableColumn {
  label?: string
  key?: string
  sortable?: boolean
  order?: 'none' | 'desc' | 'asc'
}

export interface SelectQuery {
  included: Array<string>
}
export interface TableProps<T> {
  tableColumns?: Array<TableColumn>
  items?: Array<T>
  selectable?: boolean
  uniqueKey?: string
}
