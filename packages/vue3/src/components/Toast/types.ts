export type ToastType = 'warning' | 'success' | 'info';

export interface ToastServiceProps extends ToastAttributesObject {
  title: String
  description: String
}

export interface ToastAttributesObject {
  type?: ToastType
  closeAfterDuration?: Number
}
