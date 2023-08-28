import express from 'express';

import {buyLoan, choosePlans} from '../controllers/plan.controller';

const router = express.Router();

router.post('/', choosePlans);
router.post('/buy/:id', buyLoan);

export default router;
