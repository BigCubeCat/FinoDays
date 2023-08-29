export const RU = '₽';
export const customValue = (value: number) => {
  let result = RU;
  if (value === 0) {
    return '0' + result;
  }
  let count = 0;
  while (value > 0) {
    let sign = '';
    if (count === 3) {
      count = 0;
      sign = '.';
    }
    result = '' + (value % 10) + sign + result;
    value = Math.round(value / 10);
    count += 1;
  }
  return result;
};
