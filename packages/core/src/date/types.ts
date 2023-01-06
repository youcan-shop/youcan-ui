export interface DayStatus {
  date: Date
  isToday: boolean
  inCurrentMonth: boolean
}

export type AlphabeticalWeekdayFormat = 'long' | 'short' | 'narrow';

export type AlphabeticalMonthFormat = 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
