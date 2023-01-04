import { remove, update } from 'ramda';

export const removeFromArray = <T>(array: T[], index: number): T[] => {
  return remove(index, 1, array);
};
export const updateArray = <T>(array: T[], index: number, value: T): T[] => {
  return update(index, value, array);
};
