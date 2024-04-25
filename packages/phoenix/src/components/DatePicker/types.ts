export type DateLocale = 'en-US' | 'fr-FR' | 'es-ES' | 'de-DE' | 'ar-SA';

export interface Day {
  date?: Date
  isToday?: boolean
  isInMonth?: boolean
  selected?: boolean
}
export interface MonthsSwitcherProps {
  modelValue: Date
}

export interface DaysProps {
  month: Date
}
