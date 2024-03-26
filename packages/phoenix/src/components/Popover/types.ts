export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none';

export interface PopoverProps {
  position?: 'left' | 'right' | 'top' | 'bottom'
  show?: boolean
  imgSrc?: string
  objectFit?: ObjectFit
}
