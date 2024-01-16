export type ThumbnailSize = 'small' | 'large';
export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none';

export interface ThumbnailProps {
  size: ThumbnailSize
  src?: string
  alt?: string
  objectFit: ObjectFit
}
