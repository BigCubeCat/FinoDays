export const getYearSuffix = (value: number): string => {
  const lastDigit = value % 10;
  if (lastDigit == 1) {
    return 'год';
  } else if (lastDigit > 1 && lastDigit < 5) {
    return 'года';
  }
  return 'лет';
};
