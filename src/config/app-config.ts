import * as dotenv from 'dotenv';
import * as fs from 'fs-extra';
import * as path from 'path';

interface IConfig {
  port: number;
  prettyLog: boolean;
  jwtSecret: string;
  environment: string;
  logLevelDev: string;
  logLevelProd: string;
}

function nodeEnvSetting(): string {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV;
  }
  // tslint:disable-next-line
  console.log('NODE_ENV is not set, automatically infered to development');
  return 'development';
}

if (fs.existsSync(path.join(__dirname, '..', '..', '.env'))) {
  console.log('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

const nodeEnv: string = nodeEnvSetting();

const appConfig: IConfig = {
  port: Number(process.env.NODE_PORT || 3000),
  prettyLog: nodeEnv === 'development',
  logLevelProd: process.env.LOG_LEVEL_PROD || 'info',
  logLevelDev: process.env.LOG_LEVEL_DEV || 'debug',
  environment: nodeEnv,
  jwtSecret: process.env.JWT_SECRET,
};

export { appConfig };
