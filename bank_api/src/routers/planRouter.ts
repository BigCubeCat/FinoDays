import {TPlanDTO, TPlanRequestDTO, TSum} from '../dto/planDTO';
import {plans} from '../creditPlans';
import express from 'express';

const router = express.Router();

router.get('/all', function (_req, res, _next) {
  res.send({
    plans: plans,
  });
});

type TMatchBody = {
  score: number;
  plan: TPlanRequestDTO;
};
router.post('/match', function (req, res, _next) {
  const body: TMatchBody = req.body;
  let result: TPlanDTO[] = [];
  plans.forEach((planCmp) => {
    if (
      planCmp.condition.user_score <= body.score &&
      body.plan.term.count <= planCmp.term.count &&
      body.plan.term.unit == planCmp.term.unit &&
      rangesIntersect(body.plan.sum, planCmp.sum)
    ) {
      result.push(planCmp);
    }
  });
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
