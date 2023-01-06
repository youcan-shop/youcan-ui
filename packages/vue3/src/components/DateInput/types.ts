export type DayEdge = 'start' | 'end' | 'middle' | 'both' | 'none';

export type DayDisplayFormat = 'numeric' | '2-letters';

export interface DateInputValue {
  start?: Date
  end?: Date
}
