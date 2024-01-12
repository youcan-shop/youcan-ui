import type { AlertType } from '../Alert/types';

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  show?: boolean
  position?: ToastPosition
  type?: AlertType
  closeAfterDuration?: number
  canClose?: boolean
  relative?: boolean
}

export interface ToastOptions {
  title?: string
  description?: string
  type?: AlertType
  canClose?: boolean
}

export interface ToastType {
  id: string
  options?: ToastOptions
}

export interface ToastContainerProps {
  position?: ToastPosition
  limit?: number
}
