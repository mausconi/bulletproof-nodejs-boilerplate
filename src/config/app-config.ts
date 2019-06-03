import * as dotenv from 'dotenv';

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

const nodeEnv: string = nodeEnvSetting();

dotenv.config();

const appConfig: IConfig = {
  port: Number(process.env.NODE_PORT || 3000),
  prettyLog: nodeEnv === 'development',
  logLevelProd: process.env.LOG_LEVEL_PROD || 'info',
  logLevelDev: process.env.LOG_LEVEL_DEV || 'debug',
  environment: nodeEnv,
  jwtSecret: process.env.JWT_SECRET,
};

export { appConfig };
