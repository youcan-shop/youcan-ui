export interface Resource {
  id: number | string
  price?: string
  stock?: number
  name?: string
  thumbnailUrl?: string
  isChecked?: boolean
  showStock?: boolean
  showThumbnail?: boolean
  stockLabel?: string
}

export interface PickerProps {
  visible: boolean
  title?: string
  resources?: Resource[]
  selectedResources?: Resource[]
  selectionLabel?: string
  stockLabel?: string
  confirmLabel?: string
  cancelLabel?: string
}
