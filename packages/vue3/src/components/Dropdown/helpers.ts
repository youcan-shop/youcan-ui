import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';

function matches(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export function searchHandler(searchTerm: string, items: DropdownItemArray | DropdownItemGroups = {}): DropdownItemArray | DropdownItemGroups {
  if (!searchTerm) {
    return items;
  }

  if (Array.isArray(items)) {
    return items.filter(item => matches(item.label, searchTerm));
  }

  return Object.fromEntries(
    Object.entries(items)
      .map(([label, group]) => [
        label,
        group.filter((item: DropdownItemDefinition) => matches(item.label, searchTerm)),
      ])
      .filter(([, group]) => group.length),
  );
}
