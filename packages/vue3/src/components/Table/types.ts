export interface TableColumn {
  label: string
  accessor: string
  sortable?: TableColumnSort
}

export type TableColumnSort = 'none' | 'asc' | 'desc';
