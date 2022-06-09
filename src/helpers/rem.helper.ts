export const rem = (input: number | string): string => {
  if (typeof input !== "number") {
    return input;
  }

  return `${input / 10}rem`;
};
