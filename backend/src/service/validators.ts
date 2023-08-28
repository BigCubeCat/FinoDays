import {TApiRequestDTO, TPlanRequestDTO} from '../dtos/requestDTO';
import {TUserDto} from '../dtos/userDTO';

type TValidateResult = {
  user: undefined | TUserDto;
  plan: undefined | TPlanRequestDTO;
};

const validateUser = (user: TUserDto) => {
  if (!user.age) {
    return 'Age is empty';
  }
  if (!user.name) {
    return "User's name is empty";
  }
  if (!user.phone) {
    return "User's phone is empty";
  }
  if (!user.experience) {
    return "User's experience is empty";
  }
  if (!user.count) {
    return "User's count is empty";
  }
  return '';
};

const validatePlan = (plan: TPlanRequestDTO) => {
  if (!plan.term) {
    return 'Loan term is empty';
  }
  if (!plan.term.count) {
    return 'Loan term count is empty';
  }
  if (!plan.sum) {
    return 'Loan sum is empty';
  }
  return '';
};

/**
 * Validates the body of the API request.
 *
 * @param {TApiRequestDTO} body - The body of the API request.
 * @returns {TValidateResult} If the body is empty return {user: undefined, plan: undefined}.
 * If the plan ok, but user no, return {user: undefined, plan: TPlanDto} (in this case user score is Infinity).
 * If everything is ok, return {user: TUserDto, plan: TPlanDto}
 */
export const validateBody = (body: TApiRequestDTO): TValidateResult => {
  const result: {
    user: undefined | TUserDto;
    plan: undefined | TPlanRequestDTO;
  } = {
    user: undefined,
    plan: undefined,
  };
  if (!body) {
    console.error('Body is empty');
    return result;
  } else if (!body.user) {
    const userCheck = validateUser(body.user);
    if (userCheck) {
      console.error(userCheck);
    } else {
      result.user = body.user;
    }
  }
  if (!body.plan) {
    console.error('Plan is empty');
  } else {
    const planCheck = validatePlan(body.plan);
    if (planCheck) {
      console.error(planCheck);
    } else {
      result.plan = body.plan;
    }
  }
  return result;
};
