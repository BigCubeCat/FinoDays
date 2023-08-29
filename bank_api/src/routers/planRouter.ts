import { TPlanDTO, TPlanRequestDTO, TSum } from '../dto/planDTO';
import { plans } from '../creditPlans';
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

type ApproveRequest = {
  score: number;
}
router.post('/buy/:id', function (req, res, _next) {
  const approveRequest: ApproveRequest = req.body;
  const requestedPlanId = parseInt(req.params.id);

  if (!approveRequest || !approveRequest.score) {
    res.status(400).send("Bad Request. 'body' and 'score' are required");
    return;
  }

  const foundPlan = plans.find(plan => plan.id === requestedPlanId);
  if (!foundPlan) {
    res.status(400).send("Bad Request. Plan not found");
    return;
  }

  const chance = calculateChance(foundPlan.condition.user_score, approveRequest.score);
  res.status(200).json({
    status: (Math.random() <= chance) ? "accept" : "decline",
  });
});

function calculateChance(userScore: number, requestScore: number): number {
  return (userScore - requestScore) / 100 + 0.4;
}



export default router;
