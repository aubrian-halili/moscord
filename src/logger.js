const winston = require('winston');
const config = require('config');
const { LoggingWinston } = require('@google-cloud/logging-winston');

const { Logger: { level } } = config;

const logger = winston.createLogger({
  level,
  handleExceptions: true,
  format: winston.format.json(),
  defaultMeta: { service: 'moscord-ecomm' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

if (process.env.NODE_ENV === 'production'
  || process.env.NODE_ENV === 'staging') {
  logger.add(new LoggingWinston());
}

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
