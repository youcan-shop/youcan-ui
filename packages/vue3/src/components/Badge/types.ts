export type BadgeSize = 20 | 24;

export type BadgeState = 'neutral' | 'danger' | 'info' | 'warning' | 'success';

export interface BadgeProps {
  size?: BadgeSize
  state?: BadgeState
}
