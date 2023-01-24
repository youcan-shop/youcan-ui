export type ToastType = 'error' | 'warning' | 'success' | 'neutral';

export interface ToastServiceProps extends ToastAttributesObject {
  title: String
  description: String
}

export interface ToastObject {
  title: String
  description: String
  attributes: ToastAttributesObject
  events: ToastEventsObject
}

export interface ToastAttributesObject {
  type?: ToastType
  hasIcon?: Boolean
  canClose?: Boolean
  hasActions?: Boolean
  primaryButton?: String
  secondaryButton?: String
  closeAfter?: Number
}

export interface ToastEventsObject {
  clickPrimaryButton?: Function
  clickSecondaryButton?: Function
}

