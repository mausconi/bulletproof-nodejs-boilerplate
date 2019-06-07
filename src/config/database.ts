import * as knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile';
import { appConfig } from './app-config';

const databaseSetup = () => {
  const config = knexConfig[appConfig.environment];
  if (!config) {
    throw Error(`Database connect error: invalid environment ${appConfig.environment}`);
  }

  Model.knex(knex(config));
};
export default databaseSetup;
