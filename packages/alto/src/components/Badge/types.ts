export type BadgeSize = 'sm' | 'md';

export type BadgeState = 'neutral' | 'danger' | 'info' | 'warning' | 'success';

export interface BadgeProps {
  size?: BadgeSize
  state?: BadgeState
}
