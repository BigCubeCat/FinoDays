import {TPlanRequestDTO} from '../dtos/requestDTO';
import {TUserDto} from '../dtos/userDTO';

/**
 * Generates a new plan DTO by filling in default values for missing properties.
 *
 * @param {TPlanRequestDTO} plan - The original DTO.
 */
export const fillPlan = (plan: TPlanRequestDTO) => {
  if (plan.sum.from) {
    plan.sum.from = 0;
  }
  if (plan.sum.to) {
    plan.sum.to = Infinity;
  }
};

/**
 * Generates a new user DTO by filling in default values for missing properties.
 *
 * @param {TUserDto} user - The original DTO.
 */
export const fillUser = (user: TUserDto) => {
  if (!user.finance.income || !user.finance.consumption) {
    user.finance.consumption = user.finance.percent || 100;
    user.finance.income = 100;
  }
  if (user.provision) {
    user.provision = 'none';
  }
};
