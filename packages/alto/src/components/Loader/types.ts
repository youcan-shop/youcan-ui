export type SpinnerType = 'brand' | 'bar' | 'spinner';

interface SharedProps {
  size: number
  type?: SpinnerType
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
  labelFontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: SpinnerType
}
