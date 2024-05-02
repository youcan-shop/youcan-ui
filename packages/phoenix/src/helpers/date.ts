import type { DateLocale, DateValue, Day, NavigateDirection } from '~/types';

interface DateTimeFormatOptions {
  day?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
}

export function isSameDay(a: Date, b: Date): boolean {
  if (a && b) {
    return a.toDateString() === b.toDateString();
  }

  return false;
}

export function isMoreThan(a: Date, b: Date): boolean {
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

export function navigateToMonth(direction: NavigateDirection, currentMonth: number, currentYear: number) {
  let year = currentYear;
  let month = currentMonth;

  if (direction === 'next') {
    month = currentMonth < 11 ? currentMonth + 1 : 0;
    year = month === 0 ? currentYear + 1 : currentYear;
  }

  if (direction === 'previous') {
    month = currentMonth > 0 ? currentMonth - 1 : 11;
    year = month === 11 ? currentYear - 1 : currentYear;
  }

  return { year, month };
}

export function getWeekdayNames(locale: DateLocale = 'en'): string[] {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, 3 + i).toLocaleDateString(locale, { weekday: 'short' }),
  );
}

export function monthToString(month: number, locale: DateLocale = 'en'): string {
  return new Date(2021, month, 1).toLocaleDateString(locale, { month: 'long' });
}

function monthDays(month: number, year: number, inMonth = false): Day[] {
  const daysCount = new Date(year, month + 1, 0).getDate();

  const days: Day[] = [];

  for (let i = 1; i <= daysCount; i++) {
    const d = new Date(year, month, i);
    days.push({
      date: d,
      isInMonth: inMonth,
      isToday: (isSameDay(d, new Date()) && inMonth),
    });
  }

  return days;
}

export function getDisplayedDays(date: Date): Day[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  let days: Day[] = [];
  const firstDay = new Date(year, month, 1).getDay();
  const prevMonth = navigateToMonth('previous', month, year);
  const nextMonth = navigateToMonth('next', month, year);

  const prevMonthDays = monthDays(prevMonth.month, prevMonth.year);
  days = prevMonthDays.slice(prevMonthDays.length - firstDay, prevMonthDays.length);

  monthDays(month, year, true).forEach((day: Day) => days.push(day));

  const nextMonthDays = monthDays(nextMonth.month, nextMonth.year);
  const nextDaysCount = days.length % 7;
  if (nextDaysCount > 0) {
    nextMonthDays.slice(0, 7 - nextDaysCount).forEach((day: Day) => days.push(day));
  }

  return days;
}
