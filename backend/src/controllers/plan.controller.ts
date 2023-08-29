import {validateBody} from '../service/validators';
import {getPlans} from '../api_bridges/bankApiBridge';
import {Request, Response} from 'express';
import {fillPlan, fillUser} from '../service/fillers';
import {TPlanRequestDTO} from '../dtos/requestDTO';
import {fetchPost} from '../api_bridges/utils';
import {config} from '../config';

export async function choosePlans(req: Request, res: Response) {
  try {
    const body = validateBody(req.body);
    if (body.error) {
      res.status(400).json({error: body.error});
      return;
    }
    if (body.user) {
      body.user = fillUser(body.user);
    }
    if (body.plan) {
      body.plan = fillPlan(body.plan);
    }
    console.log('body = ', body);
    const plans = await getPlans(body.user, body.plan as TPlanRequestDTO);
    res.status(200).send(plans);
  } catch (error) {
    console.error(error);
    res.status(400).json({error});
  }
}

export async function buyLoan(req: Request, res: Response) {
  const address = `${config.api_address}/plan/buy/${req.params.id}`;
  console.log(address);
  
  try {
    const resp = await fetchPost(address, {});
    res.status(200).json({ status: resp.status });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e });
  }
}
