import express from 'express';
import { getUserPlans } from '../score';
import { TUserDto } from '../dtos/userDTO';
import { TPlanType } from '../dtos/planDTO';

const router = express.Router();


router.post('/get/plans/', async function (req, res, next) {
  res.send({
    plans: await getUserPlans(req.body.user, req.body.type)
  });
});

export default router;