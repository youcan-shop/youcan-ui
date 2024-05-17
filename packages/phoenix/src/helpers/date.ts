import type { DateLocale, DateValue, DatesLimit, Day } from '~/types';

interface DateTimeFormatOptions {
  day?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
}

/**
 * Checks if two dates are the same.
 *
 * Compares two Date objects to see if they represent the same calendar date
 *
 * @param a - The first Date.
 * @param b - The second Date.
 * @returns {boolean} - True if both dates are the same, otherwise false.
 */
export function isSameDate(a: Date, b: Date): boolean {
  if (a && b) {
    return a.toDateString() === b.toDateString();
  }

  return false;
}

/**
 * Checks if the first date is more than the second date.
 *
 * Compares two Date objects to see if the first one is more than second
 *
 * @param a - The first Date object or undefined.
 * @param b - The second Date object or undefined.
 * @returns {boolean} - True if the first date is more than the second, otherwise false.
 */
export function isMoreThan(a: Date | undefined, b: Date | undefined): boolean {
  if (a && b) {
    return a.getTime() > b.getTime();
  }

  return false;
}

/**
 * Formats a date according to the specified locale.
 *
 * Takes a Date object and formats it into a string based on the provided locale,
 *
 * @param date - The Date object to format.
 * @param locale - The locale string that determines the format of the date.
 * @returns {string} - The formatted date string, or an empty string if the date is not provided.
 */
export function dateFormat(date: DateValue, locale: DateLocale): string {
  const options: DateTimeFormatOptions = {
    day: '2-digit', month: '2-digit', year: 'numeric',
  };
  if (date) {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  return '';
}

/**
 * Moves to a different month based on the given date.
 *
 * @param baseDate - The starting Date object.
 * @param offsetMonths - The number of months to move forward or backward (default is 1).
 * @returns {Date} - A new Date object set to the first day of the resulting month.
 */
export function moveToMonth(baseDate: Date, offsetMonths = 1): Date {
  const date = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  date.setMonth(baseDate.getMonth() + offsetMonths);

  return date;
}

/**
 * Returns the names of the weekdays for a given locale.
 * based on the specified locale.
 *
 * @param locale - The locale string that determines the language of the weekday names (default is 'en').
 * @returns {string[]} - An array of  weekday names.
 */
export function getWeekdayNames(locale = 'en'): string[] {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, 3 + i).toLocaleDateString(locale, { weekday: 'short' }),
  );
}

/**
 * Converts a month number to its full name according to the specified locale.
 *
 * Takes a month number (0 for January, 11 for December) and returns the full name
 * of the month as a string in the specified locale.
 *
 * @param monthNumber - The month number (0-11).
 * @param locale - The locale string that determines the language of the month name (default is 'en').
 * @returns {string} - The full name of the month in the specified locale.
 */
export function getMonthName(monthNumber: number, locale = 'en'): string {
  return new Date(2021, monthNumber, 1).toLocaleDateString(locale, { month: 'long' });
}

/**
 * Generates an array of day objects for a given month and year.
 *
 * Creates a list of day objects for each day in the specified month and year,
 * with additional properties indicating if the day is in the given month,
 * if it is today, and if it is disabled based on the provided date limits.
 *
 * @param month - The month number (0-11).
 * @param year - The year number.
 * @param isCurrentMonth - Boolean indicating if the days are in the current month.
 * @param dateLimits - An object containing the minDate and maxDate to determine if a day is disabled.
 * @returns {Day[]} - An array of day objects for the specified month and year.
 */
export function generateMonthDays(month: number, year: number, isCurrentMonth: boolean, dateLimits: DatesLimit): Day[] {
  const daysCount = new Date(year, month + 1, 0).getDate();
  const days: Day[] = [];

  for (let i = 1; i <= daysCount; i++) {
    const date = new Date(year, month, i);
    const disabled = isMoreThan(date, dateLimits.maxDate) || isMoreThan(dateLimits.minDate, date);

    days.push({
      date,
      isInMonth: isCurrentMonth,
      isToday: isSameDate(date, new Date()) && isCurrentMonth,
      disabled,
    });
  }

  return days;
}

/**
 * Generates an array of displayed days for a given month based on a reference date and date limits.
 *
 * Creates an array of day objects representing the days to be displayed in a calendar grid
 * for the specified month and year, including days from the previous and next months as needed
 * to fill out the grid, while respecting specified date limits for disabled days.
 *
 * @param date - The reference Date object representing the month to display.
 * @param datesLimit - An object containing the minDate and maxDate to determine disabled days.
 * @returns {Day[]} - An array of day objects representing the displayed days for the month.
 */
export function generateDisplayedDays(date: Date, datesLimit: DatesLimit): Day[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  let days: Day[] = [];
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const prevMonth = moveToMonth(date, -1);
  const nextMonth = moveToMonth(date);

  // Days from the previous month
  const prevMonthDays = generateMonthDays(prevMonth.getMonth(), prevMonth.getFullYear(), false, datesLimit);
  days = prevMonthDays.slice(prevMonthDays.length - firstDayOfWeek, prevMonthDays.length);

  // Days from the current month
  generateMonthDays(month, year, true, datesLimit).forEach((day: Day) => days.push(day));

  // Days from the next month to complete the last week of the grid
  const nextMonthDays = generateMonthDays(nextMonth.getMonth(), nextMonth.getFullYear(), false, datesLimit);
  const remainingDays = 7 - (days.length % 7);
  if (remainingDays > 0 && remainingDays < 7) {
    days = [...days, ...nextMonthDays.slice(0, remainingDays)];
  }

  return days;
}

/**
 * Returns the date that was a specified number of days ago from the current date.
 *
 * Calculates and returns a Date object representing a date that occurred
 * the specified number of days in the past relative to the current date.
 *
 * @param days - The number of days in the past (e.g., 1 for yesterday, 7 for a week ago).
 * @returns {Date} - A Date object representing the past date.
 */
export function getDateDaysAgo(days: number): Date {
  return new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000);
}
