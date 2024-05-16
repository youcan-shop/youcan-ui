import type { DateLocale, DateValue, DatesLimit, Day } from '~/types';

interface DateTimeFormatOptions {
  day?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
}

export function isSameDate(a: Date, b: Date): boolean {
  if (a && b) {
    return a.toDateString() === b.toDateString();
  }

  return false;
}

export function isMoreThan(a: Date | undefined, b: Date | undefined): boolean {
  if (a && b) {
    return a.getTime() > b.getTime();
  }

  return false;
}

export function dateFormat(date: DateValue, locale: DateLocale) {
  const options: DateTimeFormatOptions = {
    day: '2-digit', month: '2-digit', year: 'numeric',
  };
  if (date) {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  return '';
}

export function navigateToMonth(currentDate: Date, monthCount = 1) {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  date.setMonth(currentDate.getMonth() + monthCount);

  return date;
}

export function getWeekdayNames(locale: DateLocale = 'en'): string[] {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, 3 + i).toLocaleDateString(locale, { weekday: 'short' }),
  );
}

export function monthToString(month: number, locale: DateLocale = 'en'): string {
  return new Date(2021, month, 1).toLocaleDateString(locale, { month: 'long' });
}

function monthDays(month: number, year: number, inMonth: boolean, datesLimit: DatesLimit): Day[] {
  const daysCount = new Date(year, month + 1, 0).getDate();

  const days: Day[] = [];

  for (let i = 1; i <= daysCount; i++) {
    const d = new Date(year, month, i);
    const disabled = isMoreThan(d, datesLimit.maxDate) || isMoreThan(datesLimit.minDate, d);

    days.push({
      date: d,
      isInMonth: inMonth,
      isToday: (isSameDate(d, new Date()) && inMonth),
      disabled,
    });
  }

  return days;
}

export function getDisplayedDays(date: Date, datesLimit: DatesLimit): Day[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  let days: Day[] = [];
  const firstDay = new Date(year, month, 1).getDay();
  const prevMonth = navigateToMonth(date, -1);
  const nextMonth = navigateToMonth(date);

  const prevMonthDays = monthDays(prevMonth.getMonth(), prevMonth.getFullYear(), false, datesLimit);
  days = prevMonthDays.slice(prevMonthDays.length - firstDay, prevMonthDays.length);

  monthDays(month, year, true, datesLimit).forEach((day: Day) => days.push(day));

  const nextMonthDays = monthDays(nextMonth.getMonth(), nextMonth.getFullYear(), false, datesLimit);

  const nextDaysCount = days.length % 7;
  if (nextDaysCount > 0) {
    nextMonthDays.slice(0, 7 - nextDaysCount).forEach((day: Day) => days.push(day));
  }

  return days;
}

export function getDateLast(days: number) {
  return new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000);
}
