import express from 'express';

import {choosePlans} from '../controllers/plan.controller';

const router = express.Router();

router.post('/', choosePlans);

export default router;
