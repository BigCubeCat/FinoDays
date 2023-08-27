import { TPlanDTO } from '../dto/planDTO';
import { plans } from '../creditPlans';
import router from './indexRouter';

/**
 * GET request handler for the root route.
 * Returns all plans.
 */
router.get('/get/all', function (_req, res, _next) {
  res.send({
    "plans": plans
  })
});


/**
 * GET request handler for the route with score and type parameters.
 * Returns plans that match the given score and type.
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