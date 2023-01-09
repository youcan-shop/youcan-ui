import type { Component } from 'vue';
import type { StatusDefinition } from '../Status/types';
import type { PercentageType } from '../Percentage/types';
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

export type TableComposableVariant = 'link' | 'thumbnail' | 'status' | 'percentage';

export type TableDataComposable = {
  variant: Extract<TableComposableVariant, 'link'>
  data: TableDataLink
  events?: Record<string, () => void>
} | {
  variant: Extract<TableComposableVariant, 'thumbnail'>
  data: TableDataThumbnail
  events?: Record<string, () => void>
} | {
  variant: Extract<TableComposableVariant, 'status'>
  data: TableDataStatus
  events?: Record<string, () => void>
} | {
  variant: Extract<TableComposableVariant, 'percentage'>
  data: TableDataPercentage
  events: Record<string, () => void>
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

export interface TableDataPercentage {
  percentage: number
  type: PercentageType
}
