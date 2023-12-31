import { TApiRequestDTO, TPlanRequestDTO } from '../dtos/requestDTO';
import { TUser } from '../dtos_v2/userDTO';

type TValidateResult = {
  user: undefined | TUser;
  plan: undefined | TPlanRequestDTO;
  error: string;
};

const validateUser = (user: TUser) => {
  if (!user.age) return 'Age is empty';
  if (!user.name) return "User's name is empty";
  if (!user.phone) return "User's phone is empty";
  if (!user.experience) return "User's experience is empty";
  if (!user.income) return "User's income is empty";
  if (!user.inn) return "User's inn is empty";
  if (!user.region) return "User's region is empty";
  return '';
};

const validatePlan = (plan: TPlanRequestDTO) => {
  if (!plan.duration) {
    return 'Duration is empty';
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
  if (!body) {
    return { user: undefined, plan: undefined, error: 'Body is empty' };
  }

  const result: TValidateResult = { user: undefined, plan: undefined, error: '' };

  if (body.user) {
    const userCheck = validateUser(body.user);
    if (userCheck) {
      result.error = userCheck;
    } else {
      result.user = body.user;
    }
  }

  if (!body.plan) {
    result.error = 'Plan is empty';
  } else {
    const planCheck = validatePlan(body.plan);
    if (planCheck) {
      result.error = planCheck;
    } else {
      result.plan = body.plan;
    }
  }

  return result;
};
