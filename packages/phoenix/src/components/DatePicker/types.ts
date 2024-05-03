export type DateLocale = 'en' | 'fr' | 'es' | 'de' | 'ar';
export type NavigateDirection = 'next' | 'previous';
export type DateValue = Date | null | undefined;
export interface RangeType { start: DateValue; end: DateValue}
export type DateRangeValue = RangeType | undefined;

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
  modelValue?: DateValue
  locale?: DateLocale
  range?: DateRangeValue
}
export interface DaysProps extends SharedProps {
  month: Date
  hoverDate: Date | null
}

export interface CalendarProps extends SharedProps {}

export interface DatePickerProps extends SharedProps {
  placeholder?: string
  closeOnSelect?: boolean
}
