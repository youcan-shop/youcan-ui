export type AlertType = 'warning' | 'success' | 'info' | 'error';

export interface AlertProps {
  type: AlertType
  closeAfterDuration?: number
  canClose?: boolean
}
