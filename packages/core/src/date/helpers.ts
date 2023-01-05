import type { AlphabeticalMonthFormat, AlphabeticalWeekdayFormat, DayStatus } from './types';

/**
 * Returns the number of days in the month of the given date.
 *
 * @param date - The date to get the number of days in the month for.
 */
const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

/**
 * Returns an array of dates representing the given number of days before the start
 * of the month of the given date.
 *
 * @param date - The date to get the days before the month for.
 * @param daysBefore - The number of days to include in the array.
 */
const getDaysBeforeMonth = (date: Date, daysBefore: number): Date[] => {
  const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  return [...Array(daysBefore)].map(
    (_, i) => new Date(lastDayOfPreviousMonth.getFullYear(), lastDayOfPreviousMonth.getMonth(), lastDayOfPreviousMonth.getDate() - i),
  ).reverse();
};

/**
 * Returns an array of dates representing the given number of days after the end of
 * the month of the given date.
 *
 * @param date - The date to get the days after the month for.
 * @param daysAfter - The number of days to include in the array.
 */
const getDaysAfterMonth = (date: Date, daysAfter: number): Date[] => {
  const firstDayOfNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);

  return [...Array(daysAfter)].map(
    (_, i) => new Date(firstDayOfNextMonth.getFullYear(), firstDayOfNextMonth.getMonth(), firstDayOfNextMonth.getDate() + i),
  );
};

/**
 * Returns an array of dates representing all the days in the month of the given date.
 *
 * @param date - The date to get the days in the month for.
 */
const getDaysInMonthArray = (date: Date): Date[] => {
  return [...Array(getDaysInMonth(date))].map(
    (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1),
  );
};

/**
 * Returns an array of objects representing the given days, with added properties
 * for the current date, whether the day is today's date, whether the day is
 * the selected date, and whether the day is in the current month.
 *
 * @param today - The selected date.
 * @param days - The array of days to add properties to.
 */
const addStatusToDays = (today: Date, days: Date[]): DayStatus[] => {
  return days.map(
    day => (
      {
        date: day,
        isToday: day.toDateString() === new Date().toDateString(),
        inCurrentMonth: day.getMonth() === today.getMonth(),
      }
    ),
  );
};

/**
 * Returns an array of dates representing the days of the week starting on the
 * first day of the week.
 */
export const weekDays = (): Date[] => {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, 4 + i),
  );
};

/**
 * Returns an array of objects representing the days in the month cycle that
 * includes the given date, with added properties for the current date,
 * whether the day is today's date, whether the day is the selected
 * date, and whether the day is in the current month.
 *
 * @param date - The selected date.
 */
export const getDaysForDateMonthCycle = (date: Date): DayStatus[] => {
  const daysInMonth = getDaysInMonth(date);
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), daysInMonth);

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();

  const daysBefore = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const daysAfter = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;

  const daysBeforeMonth = getDaysBeforeMonth(date, daysBefore);
  const daysAfterMonth = getDaysAfterMonth(date, daysAfter);

  return [...addStatusToDays(date, daysBeforeMonth), ...addStatusToDays(date, getDaysInMonthArray(date)), ...addStatusToDays(date, daysAfterMonth)];
};

/**
 * Returns the alphabetical form of the weekday of the given date, using the English (US) locale and the specified format.
 *
 * @param date - The date to get the alphabetical form of the weekday for.
 * @param format - The format of the alphabetical weekday.
 */
export const getAlphabeticalWeekday = (date: Date, format: AlphabeticalWeekdayFormat = 'short'): string => {
  return Intl.DateTimeFormat('en-US', { weekday: format }).format(date);
};

/**
 * Returns the alphabetical form of the month of the given date, using the English (US) locale and the specified format.
 *
 * @param date - The date to get the alphabetical form of the month for.
 * @param format - The format of the alphabetical month.
 */
export const getAlphabeticalMonth = (date: Date, format: AlphabeticalMonthFormat = 'long'): string => {
  return Intl.DateTimeFormat('en-US', { month: format }).format(date);
};

/**
 * Determines whether the two given dates represent the same day.
 *
 * @param a - The first date to compare.
 * @param b - The second date to compare.
 */
export const isSameDay = (a: Date, b: Date): boolean => {
  return a.toDateString() === b.toDateString();
};

/**
 * Determines whether the given date is between the start and end dates (inclusive).
 *
 * @param date - The date to check.
 * @param start - The start of the range.
 * @param end - The end of the range.
 */
export const isBetween = (date: Date, start: Date, end: Date): boolean => {
  return date >= start && date <= end;
};

/**
 * Determines whether the given date is on or after the second date.
 *
 * @param a - The date to check.
 * @param b - The second date to compare.
 */
export const biggerThan = (a: Date, b: Date): boolean => {
  return a >= b;
};
