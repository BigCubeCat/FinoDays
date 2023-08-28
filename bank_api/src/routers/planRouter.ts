import {TPlanDTO, TPlanRequestDTO, TSum} from '../dto/planDTO';
import {plans} from '../creditPlans';
import express from 'express';

const router = express.Router();

router.get('/all', function(_req, res, _next) {
  res.send({
    plans: plans,
  });
});

type TMatchBody = {
  score: number;
  plan: TPlanRequestDTO;
};
router.post('/match', function(req, res, _next) {
  const body: TMatchBody = req.body;
  console.log(body)
  const result: TPlanDTO[] = plans.filter((plan) =>
    plan.condition.user_score <= body.score &&
    (body.plan.duration - plan.duration) < 2 &&
    body.plan.sum >= plan.sum.from && body.plan.sum <= plan.sum.to,
  );
  res.send({
    plans: result,
  });
});

/**
 * Checks if two ranges intersect.
 *
 * @param {TSum} range1 - The first range to check.
 * @param {TSum} range2 - The second range to check.
 * @returns {boolean} True if the ranges intersect, false otherwise.
 */
function rangesIntersect(range1: TSum, range2: TSum): boolean {
  return (
    (range1.from >= range2.from && range1.from <= range2.to) ||
    (range1.to >= range2.from && range1.to <= range2.to) ||
    (range2.from >= range1.from && range2.from <= range1.to) ||
    (range2.to >= range1.from && range2.to <= range1.to)
  );
}

export default router;
