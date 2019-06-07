import { Application } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

export const handleCors = (app: Application) =>
  app.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (app: Application) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

export const handleCompression = (app: Application) => app.use(compression());
