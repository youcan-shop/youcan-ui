export type DayEdge = 'start' | 'end' | 'middle' | 'both' | 'none';

export type DayDisplayFormat = 'numeric' | '2-letters';
export interface MonthSwitcherProps {
  modelValue: Date
}

export interface DayProps {
  edge: DayEdge
  date: Date
  isToday: boolean
  isSelected: boolean
  inCurrentMonth?: boolean
  format?: DayDisplayFormat
  disabled?: boolean
}
