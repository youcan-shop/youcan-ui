interface BaseResource {
  id?: number | string
  price?: string
  stock?: number
  name?: string
  thumbnailUrl?: string
  isChecked: boolean
  isIndeterminate?: boolean
}

export interface Variant extends BaseResource {}

export interface Resource extends BaseResource {
  variants?: Variant[]
}

export interface ResourceProps {
  resource: Resource
  isChecked?: boolean
  showStock?: boolean
  showThumbnail?: boolean
  stockLabel?: string
  modelValue: boolean
  indeterminate?: boolean
}

export interface PickerProps {
  visible: boolean
  title?: string
  resources?: Resource[]
  selectionLabel?: string
  stockLabel?: string
  confirmLabel?: string
  cancelLabel?: string
  isLoading?: boolean
  emptyStateLabel?: string
  searchPlaceholder?: string
}
