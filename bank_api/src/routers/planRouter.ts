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
  const result: TPlanDTO[] = plans.filter((plan) =>
    plan.condition.user_score <= body.score &&
    (body.plan.duration - plan.duration) < 2 &&
    body.plan.sum >= plan.sum.from && body.plan.sum <= plan.sum.to,
  );
  console.log(body.plan.sum);
  res.send({
    plans: result,
  });
});



router.post('/buy/:id', function (req, res, _next) {
  const requestedPlanId = parseInt(req.params.id);

  const foundPlan = plans.find(plan => plan.id === requestedPlanId);
  if (!foundPlan) {
    res.status(400).send("Bad Request. Plan not found");
    return;
  }
  res.status(200).json({
    status: (Math.random() < 0.5) ? "accept" : "decline",
  });
});



export default router;
