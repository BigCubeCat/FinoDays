import {TProvision, UserDto} from './types';

const ageScore = (age: number) => {
  if (age < 23) {
    return 9;
  } else if (age < 45) {
    return 15;
  } else if (age < 64) {
    return 34;
  }
  return 10;
};

const expScore = (exp: number) => {
  if (exp < 1.6) {
    return 14;
  } else if (exp < 10) {
    return 27;
  }
  return 34;
};

const loanScore = (loanPercent: number) => {
  if (loanPercent < 0.1) {
    return 58;
  } else if (loanPercent < 0.51) {
    return 43;
  } else if (loanPercent < 0.71) {
    return 21;
  }
  return 10;
};

const countLoansScore = (count: number) => {
  if (count === 0) {
    return 40;
  } else if (count < 3) {
    return 34;
  } else if (count < 5) {
    return 15;
  }
  return 3;
};

const provisionScore = (prov: TProvision) => {
  switch (prov) {
    case 'car':
      return 47;
    case 'house':
      return 47;
    case 'land':
      return 32;
    case 'none':
      return 15;
  }
};

export default function calculateSum(user: UserDto) {
  const percent = user.consumption / user.income;
  const result = ageScore(user.age) +
    countLoansScore(user.count) +
    expScore(user.experience) +
    loanScore(percent) +
    provisionScore(user.provision);
  console.log(result);
  return result;
}