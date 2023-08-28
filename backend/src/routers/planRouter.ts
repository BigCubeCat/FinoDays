import express from 'express';

import {getUserPlans} from '../api_bridges/bankApiBridge';

const router = express.Router();

/*
 * Body: { user: TUserDto, type: TPlanType }
 */
router.post('/', async function (req, res, _next) {
  console.log(req.body);
  res.status(200).json({
    plans: await getUserPlans(req.body.user, req.body.type),
  });
});

export default router;
