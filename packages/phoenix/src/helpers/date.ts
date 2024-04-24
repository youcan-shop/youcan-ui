import type { DateLocale } from '~/types';

export function getWeekdayNames(locale: DateLocale = 'en-US'): string[] {
  return [...Array(7)].map(
    (_, i) => new Date(2021, 0, i).toLocaleDateString(locale, { weekday: 'short' }),
  );
}

export function monthToString(month: number, locale: DateLocale = 'en-US'): string {
  return new Date(2021, month, 1).toLocaleDateString(locale, { month: 'long' });
}
