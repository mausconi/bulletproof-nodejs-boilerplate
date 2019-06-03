import * as winston from 'winston';
import { appConfig } from './app-config';
import * as fs from 'fs';

const logDir: string = '../logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const options = {
  file: {
    filename: `../logs/${appConfig.environment}.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    ),
  },
  console: {
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf(
        info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`)),
  },
};

const logger = winston.createLogger({
  level: appConfig.environment === 'production' ? appConfig.logLevelProd : appConfig.logLevelDev,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  ),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

export default logger;
