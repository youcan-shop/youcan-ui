import type { AlertType } from '../Alert/types';

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
  show?: boolean
  position?: ToastPosition
  type?: AlertType
  closeAfterDuration?: number
  canClose?: boolean
}
