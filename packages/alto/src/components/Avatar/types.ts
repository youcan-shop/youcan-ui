export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface AvatarProps {
  size?: AvatarSize
  clickable?: boolean
  source?: string
  url?: string
  initials?: string
}
