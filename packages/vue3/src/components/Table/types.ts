import type { Component } from 'vue';
import type { StaticStatusDefinition, StatusDefinition } from '../Status/types';
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
  value: string | number | TableDataComposable
  accessor: string
  isString: boolean
  component?: Component | undefined
}

export interface TableData {
  [key: string]: string | number | TableDataComposable
}

export type TableComposableVariant = 'link' | 'thumbnail' | 'status' | 'static-status' | 'percentage' | 'button' | 'rating' | 'toggle' | 'counter' | 'icon';

interface TableComposable<T extends TableComposableVariant, U, V extends Record<string, () => void> = Record<string, () => void>> {
  variant: Extract<TableComposableVariant, T>
  data: U
  events?: V
}

export type TableDataComposable =
  TableComposable<'link', TableDataLink> |
  TableComposable<'thumbnail', TableDataThumbnail> |
  TableComposable<'status', TableDataStatus> |
  TableComposable<'static-status', TableDataStaticStatus> |
  TableComposable<'percentage', TableDataPercentage> |
  TableComposable<'button', TableDataButton, { click: () => void }> |
  TableComposable<'rating', TableDataRating> |
  TableComposable<'toggle', TableDataToggle> |
  TableComposable<'counter', TableDataCounter> |
  TableComposable<'icon', TableDataIcon, { click?: () => void; mouseover?: () => void }>;

interface TableDataLink {
  label?: string
  href: string
}

interface TableDataThumbnail {
  size: ThumbnailSize
  src?: string
  alt?: string
}

interface TableDataStatus {
  statuses: StatusDefinition[]
  modelValue: StatusDefinition
}

interface TableDataStaticStatus {
  status: StaticStatusDefinition
}

interface TableDataPercentage {
  percentage: number
  type: PercentageType
}

interface TableDataButton {
  label: string
  iconName?: string
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}

interface TableDataRating {
  modelValue: number
  ceil?: number
}

interface TableDataToggle {
  modelValue: boolean
}

interface TableDataCounter {
  modelValue: string
  max?: number
  min?: number
  step?: number
  id?: string
  disabled?: boolean
}

interface TableDataIcon {
  iconName: string
}

