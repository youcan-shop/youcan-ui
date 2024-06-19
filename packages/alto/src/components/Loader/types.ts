export type SpinnerType = 'brand' | 'bar' | 'spinner';
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SharedProps {
  size: number
  color?: string
}
export interface BarLoadingProps {
  color?: string
}

export interface BrandLoadingProps extends SharedProps {}

export interface SpinnerProps extends SharedProps {}

export interface LoaderProps {
  label?: string
  size?: number
  color?: string
  labelColor?: string
  labelFontSize?: LabelSize
  type?: SpinnerType
}
