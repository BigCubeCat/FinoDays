import { TPlanRequestDTO } from '../dtos/requestDTO';
import { TUser } from '../dtos_v2/userDTO';

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
 * @param {TUser} dto - The original DTO.
 * @returns {TUser} - New DTO
 */
export const fillUser = (dto: TUser): TUser => {
  const user = structuredClone(dto);
  user.consumption ||= 0;
  user.provision ||= 'none';
  user.target ||= 'another';
  return user;
};
