export type PercentageType = 'success' | 'info' | 'warning' | 'danger' | null;

export interface PercentageProps {
  percentage: number
  type: PercentageType
}
