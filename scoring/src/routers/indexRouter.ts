import express from 'express';
import calculateSum from '../utils/scoringAlgorithm';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello World');
});

router.post('/', function(req, res, next) {
    const result = calculateSum(req.body);
    res.status(200).send({
      status: result > 100,
      score: result,
    });
  },
);

export default router;
