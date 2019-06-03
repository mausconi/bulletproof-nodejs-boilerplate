import { Application, NextFunction, Request, Response, Router } from 'express';

type Wrapper = ((app: Application) => void);

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyMiddleware = (middlewareWrappers: Wrapper[], app: Application) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(app);
  }
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
