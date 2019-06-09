import * as knex from 'knex';
import { Model } from 'objection';
import { appConfig } from './app-config';

const knexConfig = require('../../knexfile') as any;

const databaseSetup = () => {
  const config = knexConfig[appConfig.environment];
  if (!config) {
    throw Error(`Database connect error: invalid environment ${appConfig.environment}`);
  }

  Model.knex(knex(config));
};
export default databaseSetup;
