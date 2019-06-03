import * as express from 'express';
import routes from './app/http/routes';
import databaseSetup from './config/database';
import middlewares from './app/http/middlewares';
import { applyMiddleware, applyRoutes } from './app/lib/generic-wrapper';
import { errorHandler } from './app/http/middlewares/error-handlers';

class Server {

  private app: express.Application;

  constructor() {
    this.app = express();
    databaseSetup();
    this.config();
  }

  static bootstrap(): Server {
    return new Server();
  }

  config() {
    applyMiddleware(middlewares, this.app);
    applyRoutes(routes, this.app);
    applyMiddleware(errorHandler, this.app);
  }

  getRunningApplication() {
    return this.app;
  }
}

const server = Server.bootstrap();
const application = server.getRunningApplication();
export { application };
