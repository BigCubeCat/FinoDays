import express from 'express';
import { plans } from './indexData';

const router = express.Router();

router.get('/', function(_req, res, _next) {
  res.send({
    "plans": plans
  })
});


export default router;
