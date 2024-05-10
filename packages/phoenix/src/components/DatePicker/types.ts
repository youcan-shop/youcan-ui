export type DateLocale = 'en' | 'fr' | 'es' | 'de' | 'ar';
export type ShowingType = boolean | 'months' | 'years';
export type DateValue = Date | null | undefined;
export interface RangeType {
  start: DateValue
  end: DateValue
}
export type DateRangeValue = RangeType | undefined;

export interface Preset {
  label: string
  from: Date
  to: Date
  active?: boolean
}

export interface Day {
  date?: Date
  isToday?: boolean
  isInMonth?: boolean
  selected?: boolean
}
export interface MonthsSwitcherProps {
  modelValue: Date
  locale?: DateLocale
  disabled?: boolean
}

export interface PresetsProps {
  presets?: Preset[]
  disabled?: boolean
}
interface SharedProps {
  modelValue?: DateValue
  locale?: DateLocale
  range?: DateRangeValue
}
export interface YearsAndMonthsProps {
  date: Date
  locale?: DateLocale
  show?: ShowingType
}
export interface DaysProps extends SharedProps {
  month: Date
  hoverDate: Date | null
  disabled?: boolean
}

export interface CalendarProps extends SharedProps {}

export interface DatePickerProps extends SharedProps {
  placeholder?: string
  closeOnSelect?: boolean
  presets?: Preset[]
}
