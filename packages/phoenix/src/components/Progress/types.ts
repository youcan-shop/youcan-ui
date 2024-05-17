type ProgressTypes = 'circle' | 'bar';
export interface ProgressProps {
  value?: number
  maxValue?: number
  playable?: boolean
  size?: number
  progressType?: ProgressTypes
}
