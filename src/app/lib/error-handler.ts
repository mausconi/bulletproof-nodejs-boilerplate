import { NextFunction, Response } from 'express';
import { HTTP404Error, HTTPClientError } from './http-client-errors';
import { appConfig } from '../../config/app-config';
import logger from '../../config/winston';

export const notFoundError = () => {
  throw new HTTP404Error('Resource not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    logger.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  logger.error(err);
  if (appConfig.environment === 'production') {
    res.status(500).send('Internal Server Error');
  } else {
    res.status(500).send(err.stack);
  }
};
