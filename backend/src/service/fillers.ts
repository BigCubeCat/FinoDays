import {TPlanRequestDTO} from '../dtos/requestDTO';
import { TUserDto } from '../dtos_v2/userDTO';

/**
 * Generates a new plan DTO by filling in default values for missing properties.
 *
 * @param {TPlanRequestDTO} dto - The original DTO.
 * @returns {TPlanRequestDTO} - New DTO
 */
export const fillPlan = (dto: TPlanRequestDTO): TPlanRequestDTO => {
  const plan = structuredClone(dto);
  plan.sum = Math.max(plan.sum, 0);
  return plan;
};

/**
 * Generates a new user DTO by filling in default values for missing properties.
 *
 * @param {TUserDto} dto - The original DTO.
 * @returns {TUserDto} - New DTO
 */
export const fillUser = (dto: TUserDto): TUserDto => {
  const user = structuredClone(dto);
  if (!user.finance.income || !user.finance.consumption) {
    user.finance.consumption = user.finance.percent || 100;
    user.finance.income = 100;
  }
  return user;
};
