import { getUserPlans } from '../api_bridges/bankApiBridge';
import router from './indexRouter';

/*
 * Body: { user: TUserDto, type: TPlanType }
 */
router.post('/get/plans/', async function (req, res, _next) {
    res.send({
        plans: await getUserPlans(req.body.user, req.body.type)
    });
});
