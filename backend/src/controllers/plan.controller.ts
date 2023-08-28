import {validateBody} from '../service/validators';
import {getPlans} from '../api_bridges/bankApiBridge';
import {Request, Response} from 'express';
import {fillBody} from '../service/fillers';

export async function choosePlans(req: Request, res: Response) {
  try {
    validateBody(req.body);
    const filledBody = fillBody(req.body);
    const plans = await getPlans(filledBody.user, filledBody.plan);
    res.status(200).json({
      plans: plans
    });
  } catch (error) {
    res.status(400).json({error});
  }
}
