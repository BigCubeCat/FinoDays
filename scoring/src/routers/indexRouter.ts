import express from 'express';
import calculateSum from '../utils/scoringAlgorithm';

const router = express.Router();

router.get('/', function (_req, res, _next) {
  res.send('Score ping!');
});

router.post('/', function (req, res, next) {
  const result = calculateSum(req.body);
  res.status(200).send({
    score: result,
  });
});
export default router;
