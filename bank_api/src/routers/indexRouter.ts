import express from 'express';
import { TPlanDTO, TPlanType } from './planDTO';
import { plans } from './indexData';

const router = express.Router();

/**
 * GET request handler for the root route.
 * Returns all plans.
 * 
 * @param {Object} _req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} _next - The next middleware function.
 * @returns {Object} - The response containing all plans.
 */
router.get('/get/all', function (_req, res, _next) {
  res.send({
    "plans": plans
  })
});


/**
 * GET request handler for the route with score and type parameters.
 * Returns plans that match the given score and type.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} _next - The next middleware function.
 * @returns {Object} - The response containing plans that match the given score and type.
 */
router.post('/get/match', function (req, res, _next) {
  const score: Number = req.body.score;
  let result: TPlanDTO[] = [];
  plans.forEach(plan => {
    if (plan.condition.user_score <= Number(score)) {
      result.push(plan)
    }
  })
  res.send({
    "plans": result
  });
});


export default router;
