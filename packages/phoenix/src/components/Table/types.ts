export interface TableColumn {
  label?: string
  key?: string
  sortable?: boolean
  order?: 'desc' | 'asc'
}

export interface SelectQuery {
  all: boolean
  excluded: Array<string>
  included: Array<string>
}
export interface TableProps<T> {
  tableColumns?: Array<TableColumn>
  items?: Array<T>
  selectable?: boolean
}
