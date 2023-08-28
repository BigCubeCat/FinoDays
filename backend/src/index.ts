import http from 'http';
import createError from 'http-errors';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './assets/swagger-output.json';

import {loadConfig, config} from './config';
loadConfig();

import indexRouter from './routers/indexRouter';
import planRouter from './routers/planRouter';

const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/plan', planRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.set('port', config.port);

const server = http.createServer(app);
server.on('listening', onListening);
server.listen(config.port);

function onListening() {
  const addr = server.address();
  console.log('Listening on ', addr);
}
