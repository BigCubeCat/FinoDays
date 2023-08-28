import { TProvision, TUser } from './types';

/**
 * Calculates the age score based on the given age.
 *
 * @param {number} age - The age of the person.
 * @return {number} The age score.
 */
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
  } else if (loanPercent < 0.91) {
    return 10;
  } else if (loanPercent >= 1) {
    return 0;
  }
  return 5;
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
    case 'none':
      return 15;
    case 'surely':
      return 28;
    case 'transport':
      return 46;
    case 'estate':
      return 68;
    case 'business':
      return 50;
    case 'property':
      return 35;
  }
};

/**
 * Calculates the sum of scores based on the user's information.
 *
 * @param {TUserDTO} user - The user object containing the user's information.
 * @return {number} The sum of the scores.
 */
export default function calculateSum(user: TUser) {
  const percent = user.consumption / user.income;
  const result = ageScore(user.age) +
    countLoansScore(user.count) +
    expScore(user.experience) +
    loanScore(percent) +
    provisionScore(user.provision);
  // console.log(result);
  return result;
}