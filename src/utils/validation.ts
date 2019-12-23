export const required = (value: string): boolean => (value ? true : false);

export const isEmail = (value: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? true : false;

const maxLength = (value: string, max: number) =>
  value.length > max ? false : true;

export const maxLength400 = (value: string) => maxLength(value, 400);
