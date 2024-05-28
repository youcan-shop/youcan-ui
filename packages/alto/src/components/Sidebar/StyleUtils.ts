import type { ItemStyleProps, SidebarStyleProps, SubItemStyleProps } from './types';

export const defaultItemStyle: ItemStyleProps = {
  hoverColor: 'var(--gray-800)',
  activeColor: 'var(--gray-800)',
  iconColor: 'var(--gray-300)',
  labelColor: 'var(--gray-300)',
  activeMarkColor: 'var(--base-white)',
  activeIconColor: 'var(--base-white)',
  activeLabelColor: 'var(--base-white)',
  font: 'var(--text-md-regular)',
};

export const defaultSidebarStyle: SidebarStyleProps = {
  backgroundColor: 'var(--blue-900)',
  width: 250,
  hoverColor: 'var(--blue-800)',
  activeColor: 'var(--blue-900)',
  iconColor: 'var(--gray-400)',
  subItemIconColor: 'var(--gray-400)',
  font: 'var(--text-lg-medium)',
  spacing: 10,
};

export const defaultSubItemStyle: SubItemStyleProps = {
  labelColor: 'var(--gray-300)',
  activeLabelColor: 'var(--base-white)',
  font: 'var(--text-md-regular)',
};

export function mergeWithDefaultValues<T extends object>(customStyle: T, defaultValues: T): T {
  const result: T = { ...customStyle };
  Object.keys(defaultValues).forEach((key) => {
    const propKey = key as keyof T;
    if (result[propKey] === undefined) {
      result[propKey] = defaultValues[propKey] as any;
    }
  });

  return result;
}
