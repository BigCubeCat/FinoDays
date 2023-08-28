import express from 'express';

const router = express.Router();

router.get('/', function (req, res, next) {
  /* 	#swagger.tags = ['main']
        #swagger.description = 'Endpoint to load recomendations' */

  /*	#swagger.parameters['obj'] = {
          in: 'body',
          description: 'Loans information.',
          required: true,
          schema: { $ref: "#/definitions/AddUser" }
  } */

  res.send('Hello World');
});

export default router;