// Generate a random 11char string.
// Please note that the uniqueness of this string is not absolute,
// perhaps think about apppending a timestamp to the generated string.
export const uniqueId = (): string => {
  return (Math.random()).toString(36).substring(2);
};
