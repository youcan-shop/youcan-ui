export type SkeletonType = 'text' | 'media' | 'card';

export interface SkeletonProps {
  type?: SkeletonType
  lines?: number
}
