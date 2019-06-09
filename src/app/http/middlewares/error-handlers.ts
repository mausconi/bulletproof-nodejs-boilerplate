import { NextFunction, Request, Response, Application } from 'express';
import * as ErrorHandler from '../../lib/error-handler';

const handle404Error = (app: Application) => {
  app.use((req: Request, res: Response) => {
    ErrorHandler.notFoundError();
  });
};

const handleClientError = (app: Application) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerError = (app: Application) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
