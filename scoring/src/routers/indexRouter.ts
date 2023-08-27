import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello World');
});

router.post('/', function(req, res, next) {
    const successPercent = Math.round(Math.random() * 100);
    res.status(200).send({
      status: successPercent > 50,
      percent: successPercent,
    });
  },
);

export default router;
