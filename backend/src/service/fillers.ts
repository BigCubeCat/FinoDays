import {TApiRequestDTO} from '../dtos/requestDTO';

/**
 * Generates a new API request body by filling in default values for missing properties.
 *
 * @param {TApiRequestDTO} body - The original API request body.
 * @return {TApiRequestDTO} - The new API request body with default values filled in.
 */
export function fillBody(body: TApiRequestDTO): TApiRequestDTO {
  let newBody = structuredClone(body);
  if (!body.user.finance.income || !body.user.finance.consumption) {
    body.user.finance.consumption = body.user.finance.percent || 100;
    body.user.finance.income = 100;
  }
  if (!body.user.provision) {
    newBody.user.provision = 'none';
  }
  if (!body.plan.sum.from) {
    newBody.plan.sum.from = 0;
  }
  if (!body.plan.sum.to) {
    newBody.plan.sum.to = Infinity;
  }
  return newBody;
}
