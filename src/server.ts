import { appConfig } from './config/app-config';
import { application } from './app';
import logger from './config/winston';
import * as http from 'http';

const PORT: number = appConfig.port;
const debug = require('debug')('express:server');

export const server = http.createServer(application);
server.listen(PORT, () =>
  logger.info(`Server is running http://localhost:${PORT}...`),
);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = `Pipe  ${PORT}`;

  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      logger.error(`An error occured ${error}`);
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = `pipe ${addr}`;
  debug(`Listening on ${bind}`);
}
