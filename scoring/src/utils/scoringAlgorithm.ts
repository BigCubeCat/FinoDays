import { TProvision, TUser } from './userDTO';

const ageScore = (age: number) => {
  if (age >= 21 && age < 71) {
    if (age <= 22) return 9;
    if (age <= 45) return 15;
    if (age <= 64) return 34;
    if (age <= 70) return 10;
  }
  return 0;
};

const experienceScore = (val: number) => {
  if (val <= 1.5) return 14;
  if (val <= 10) return 27;
  // 11+ is 34
  return 34;
};

function loanScore(val: number): number {
  if (val >= 0 && val < 1) {
    if (val <= 0.1) return 58;
    if (val <= 0.5) return 43;
    if (val <= 0.7) return 21;
    if (val > 0.7) return 10;
  }
  return 0;
}

const countLoansScore = (count: number) => {
  if (count === 0) return 40;
  if (count < 3) return 34;
  if (count < 5) return 15;
  return 3;
};

const provisionScore = (prov: TProvision) => {
  switch (prov) {
    case 'flat':
      return 47;
    case 'house':
      return 42;
    case 'land':
      return 32;
    case 'car':
      return 47;
    default:
      return 15;
  }
};

export default function calculateSum(user: TUser): number {
  const ageSc = ageScore(user.age)
  if (ageSc === 0) return 0;
  const loanSc = loanScore(user.finance.consumption / user.finance.income);
  if (loanSc === 0) return 0;
  return ageSc + loanSc +
    countLoansScore(user.finance.count) +
    experienceScore(user.finance.experience) +
    provisionScore(user.provision);
}
