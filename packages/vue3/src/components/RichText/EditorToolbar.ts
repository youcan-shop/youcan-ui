import type { ToolbarOption } from './types';

export const toolbarOptions: ToolbarOption[] = [
  ['bold'],
  ['italic'],
  ['underline'],
  ['strike'],
  [{ color: ['var(--brand-50)', 'var(--brand-200)', 'var(--brand-300)', 'var(--brand-400)', 'var(--brand-500)', 'var(--brand-600)', 'var(--brand-800)', 'var(--gray-50)', 'var(--gray-200)', 'var(--gray-300)', 'var(--gray-400)', 'var(--gray-500)', 'var(--gray-600)', 'var(--gray-800)', 'var(--blue-50)', 'var(--blue-200)', 'var(--blue-300)', 'var(--blue-400)', 'var(--blue-500)', 'var(--blue-600)', 'var(--blue-800)', 'var(--green-50)', 'var(--green-200)', 'var(--green-300)', 'var(--green-400)', 'var(--green-500)', 'var(--green-600)', 'var(--green-800)', 'var(--yellow-50)', 'var(--yellow-200)', 'var(--yellow-300)', 'var(--yellow-400)', 'var(--yellow-500)', 'var(--yellow-600)', 'var(--yellow-800)', 'var(--red-50)', 'var(--red-200)', 'var(--red-300)', 'var(--red-400)', 'var(--red-500)', 'var(--red-600)', 'var(--red-800)', 'var(--orange-50)', 'var(--orange-200)', 'var(--orange-300)', 'var(--orange-400)', 'var(--orange-500)', 'var(--orange-600)', 'var(--orange-800)'] }],
  [{ background: ['var(--brand-50)', 'var(--brand-200)', 'var(--brand-300)', 'var(--brand-400)', 'var(--brand-500)', 'var(--brand-600)', 'var(--brand-800)', 'var(--gray-50)', 'var(--gray-200)', 'var(--gray-300)', 'var(--gray-400)', 'var(--gray-500)', 'var(--gray-600)', 'var(--gray-800)', 'var(--blue-50)', 'var(--blue-200)', 'var(--blue-300)', 'var(--blue-400)', 'var(--blue-500)', 'var(--blue-600)', 'var(--blue-800)', 'var(--green-50)', 'var(--green-200)', 'var(--green-300)', 'var(--green-400)', 'var(--green-500)', 'var(--green-600)', 'var(--green-800)', 'var(--yellow-50)', 'var(--yellow-200)', 'var(--yellow-300)', 'var(--yellow-400)', 'var(--yellow-500)', 'var(--yellow-600)', 'var(--yellow-800)', 'var(--red-50)', 'var(--red-200)', 'var(--red-300)', 'var(--red-400)', 'var(--red-500)', 'var(--red-600)', 'var(--red-800)', 'var(--orange-50)', 'var(--orange-200)', 'var(--orange-300)', 'var(--orange-400)', 'var(--orange-500)', 'var(--orange-600)', 'var(--orange-800)'] }],
  [{ header: [false, 1, 2, 3, 4] }],
  [{ align: [] }],
  [{ list: 'ordered' }],
  [{ list: 'bullet' }],
  ['undo'],
  ['redo'],
  [{ indent: '-1' }],
  [{ indent: '+1' }],
  [{ direction: 'rtl' }],
  ['code-block'],
  ['link'],
  ['image'],
];
