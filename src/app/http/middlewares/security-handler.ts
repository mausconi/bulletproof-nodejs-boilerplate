import { NextFunction, Request, Response, Application } from 'express';
import * as lusca from 'lusca';

export const handleXssProtection = (app: Application) => {
  app.use(lusca.xssProtection(true));
};

export const handleXframeProtection = (app: Application) => {
  app.use(lusca.xframe('SAMEORIGIN'));
};

export const handleNoSniffProtection = (app: Application) => {
  app.use(lusca.nosniff());
};
