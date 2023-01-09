import type { Component } from 'vue';
import type { StatusDefinition } from '../Status/types';
import type { ThumbnailSize } from '~/components/Thumbnail/types';

export interface TableColumn {
  label?: string
  accessor: string
  sortable?: TableColumnSort
}

export type TableColumnSort = 'none' | 'asc' | 'desc';

export interface TableColumnValue {
  value: string | TableDataComposable
  accessor: string
  isString: boolean
  component?: Component | ''
}

export interface TableData {
  [key: string]: string | number | TableDataComposable
}

export type TableComposableVariant = 'link' | 'thumbnail' | 'status';

export type TableDataComposable = {
  variant: Extract<TableComposableVariant, 'link'>
  data: TableDataLink
} | {
  variant: Extract<TableComposableVariant, 'thumbnail'>
  data: TableDataThumbnail
} | {
  variant: Extract<TableComposableVariant, 'status'>
  data: TableDataStatus
};

export interface TableDataLink {
  label?: string
  href: string
}

export interface TableDataThumbnail {
  size: ThumbnailSize
  src?: string
  alt?: string
}

export interface TableDataStatus {
  statuses: StatusDefinition[]
  modelValue: StatusDefinition
}
