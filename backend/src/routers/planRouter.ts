import express from 'express';

import { getPlans } from '../api_bridges/bankApiBridge';
import { TApiRequestDTO } from '../dtos/requestDTO';

const router = express.Router();

router.post('/', async function (req, res, _next) {
  try {
    validateBody(req.body);
    const filledBody = fillBody(req.body);
    res.status(200).json({
      plans: await getPlans(filledBody.user, filledBody.plan),
    });
  } catch (error) {
    res.status(400).json({ error });
  }

});


/**
 * Validates the body of the API request.
 *
 * @param {TApiRequestDTO} body - The body of the API request.
 * @throws {Error} If the body is empty or if any required fields are missing.
 */
function validateBody(body: TApiRequestDTO) {
  try {
    if (!body) {
      throw new Error('Body is empty');
    }
    if (!body.user) {
      throw new Error('User is empty');
    }
    if (!body.plan) {
      throw new Error('Plan is empty');
    }
    // User's fields
    if (!body.user.age) {
      throw new Error('Age is empty');
    }
    if (!body.user.name) {
      throw new Error('User\'s name is empty');
    }
    if (!body.user.phone) {
      throw new Error('User\'s phone is empty');
    }
    if (!body.user.experience) {
      throw new Error('User\'s experience is empty');
    }
    if (!body.user.count) {
      throw new Error('User\'s count is empty');
    }
    // Plan's fields
    if (!body.plan.term) {
      throw new Error('Loan term is empty');
    }
    if (!body.plan.term.count) {
      throw new Error('Loan term count is empty');
    }
    if (!body.plan.sum) {
      throw new Error('Loan sum is empty');
    }
  } catch (e) {
    console.log(e)
    throw e;
  }
}

/**
 * Generates a new API request body by filling in default values for missing properties.
 *
 * @param {TApiRequestDTO} body - The original API request body.
 * @return {TApiRequestDTO} - The new API request body with default values filled in.
 */
function fillBody(body: TApiRequestDTO): TApiRequestDTO {
  let newBody = structuredClone(body);
  if (!body.user.consumption || !body.user.income) {
    newBody.user.consumption = 1;
    newBody.user.income = 1;
    // this values are set to 1 by default, because we need to get 1 when dividing them
  }
  if (!body.user.provision) {
    newBody.user.provision = 'none';
  }

  if (!body.plan.sum.from) {
    newBody.plan.sum.from = 0;
  }
  if (!body.plan.sum.to) {
    // Infinity
    newBody.plan.sum.to = 10e100;
  }
  if (!body.plan.term.unit) {
    newBody.plan.term.unit = 'month';
  }
  return newBody;
}
export default router;
