export const isEmptyArray = (arr: any[] | undefined) => {
  return arr === undefined || arr?.length <= 0;
};
