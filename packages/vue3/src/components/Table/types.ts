import type { Component } from 'vue';
import type { StatusDefinition } from '../Status/types';
import type { PercentageType } from '../Percentage/types';
import type { ButtonIconPosition, ButtonSize } from '../Button/types';
import type { ThumbnailSize } from '~/components/Thumbnail/types';

export interface TableColumn {
  label?: string
  accessor: string
  sortable?: TableColumnSort
}

export type TableColumnSort = 'none' | 'asc' | 'desc';

export interface TableActions {
  label: string
  iconName?: string
  criteria?: (value: TableData) => boolean
  events?: {
    click: (row: TableData, index: number) => void
  }
}

export interface TableColumnValue {
  value: string | TableDataComposable
  accessor: string
  isString: boolean
  component?: Component | ''
}

export interface TableData {
  [key: string]: string | number | TableDataComposable
}

export type TableComposableVariant = 'link' | 'thumbnail' | 'status' | 'percentage' | 'button' | 'rating' | 'toggle' | 'counter' | 'icon';

export type TableDataComposable = {
  variant: Extract<TableComposableVariant, 'link'>
  data: TableDataLink
} | {
  variant: Extract<TableComposableVariant, 'thumbnail'>
  data: TableDataThumbnail
} | {
  variant: Extract<TableComposableVariant, 'status'>
  data: TableDataStatus
} | {
  variant: Extract<TableComposableVariant, 'percentage'>
  data: TableDataPercentage
  events?: Record<string, () => void>
} | {
  variant: Extract<TableComposableVariant, 'button'>
  data: TableDataButton
  events?: {
    click: () => void
  }
} | {
  variant: Extract<TableComposableVariant, 'rating'>
  data: TableDataRating
} | {
  variant: Extract<TableComposableVariant, 'toggle'>
  data: TableDataToggle
} | {
  variant: Extract<TableComposableVariant, 'counter'>
  data: TableDataCounter
} | {
  variant: Extract<TableComposableVariant, 'icon'>
  data: TableDataIcon
  events?: {
    click?: () => void
    mouseover?: () => void
  }
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

export interface TableDataButton {
  label: string
  iconName?: string
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}

export interface TableDataRating {
  modelValue: number
  ceil?: number
}

export interface TableDataToggle {
  modelValue: boolean
}

export interface TableDataCounter {
  modelValue: string
  max?: number
  min?: number
  step?: number
  id?: string
  disabled?: boolean
}

export interface TableDataIcon {
  iconName: string
}

