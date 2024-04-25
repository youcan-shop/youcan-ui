import type { DateLocale, Day } from '~/types';

const isSameDay = (a: Date, b: Date): boolean => {
  return a.toDateString() === b.toDateString();
};

export function getWeekdayNames(locale: DateLocale = 'en-US'): string[] {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, i).toLocaleDateString(locale, { weekday: 'short' }),
  );
}

export function monthToString(month: number, locale: DateLocale = 'en-US'): string {
  return new Date(2021, month, 1).toLocaleDateString(locale, { month: 'long' });
}

export function getMonthDays(date: Date): Day[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysCount = new Date(year, month + 1, 0).getDate();
  const days: Day[] = [];

  for (let i = 1; i <= daysCount; i++) {
    const d = new Date(year, month, i);
    days.push({
      date: d,
      isInMonth: true,
      isToday: isSameDay(d, new Date()),
      selected: false,
    });
  }

  return days;
}
