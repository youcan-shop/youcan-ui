export type DateLocale = 'en' | 'fr' | 'es' | 'de' | 'ar';
export type NavigateDirection = 'next' | 'previous';

export interface Day {
  date?: Date
  isToday?: boolean
  isInMonth?: boolean
  selected?: boolean
}
export interface MonthsSwitcherProps {
  modelValue: Date
  locale?: DateLocale
}
interface SharedProps {
  modelValue: Date | null
  locale?: DateLocale
}
export interface DaysProps extends SharedProps {
  month: Date
}

export interface CalendarProps extends SharedProps {}

export interface DatePickerProps extends SharedProps {
  isRange?: boolean
}
