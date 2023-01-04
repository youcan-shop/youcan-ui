import { remove } from 'ramda';

export const removeFromArray = <T>(array: T[], index: number): T[] => {
  return remove(index, 1, array);
};
