type ProgressTypes = 'circle' | 'bar';
export interface ProgressProps {
  value?: number
  maxValue?: number
  size?: number
  progressType?: ProgressTypes
}
