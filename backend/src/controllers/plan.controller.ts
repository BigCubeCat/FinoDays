import {validateBody} from '../service/validators';
import {getPlans} from '../api_bridges/bankApiBridge';
import {Request, Response} from 'express';
import {fillPlan, fillUser} from '../service/fillers';
import {TPlanRequestDTO} from '../dtos/requestDTO';

export async function choosePlans(req: Request, res: Response) {
  try {
    const body = validateBody(req.body);
    if (body.error) {
      res.status(400).json({error: body.error});
      return;
    }
    if (body.user) {
      fillUser(body.user);
    }
    if (body.plan) {
      fillPlan(body.plan);
    }
    const plans = await getPlans(body.user, body.plan as TPlanRequestDTO);
    res.status(200).json({
      plans: plans,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({error});
  }
}
