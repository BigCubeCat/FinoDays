import http from 'http';
import createError from 'http-errors';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import indexRouter from './routers/indexRouter';
import planRouter from './routers/planRouter';

const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/plan', planRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = process.env.PORT;
console.log('port = ', port);

app.set('port', port);

const server = http.createServer(app);
server.on('listening', onListening);
server.listen(port);

function onListening() {
  const addr = server.address();
  console.log('Listening on ', addr);
}
