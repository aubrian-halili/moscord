const _ = require('lodash');

const logger = require('logger');

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (_.isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
};

const onError = (port) => {
  return (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`;

    switch (error.code) {
      case 'EACCES':
        logger.debug(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.debug(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
};

const listening = (server) => {
  return () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`;
    logger.debug(`Listening on ${bind}`);
  };
};

module.exports = {
  normalizePort,
  onError,
  listening,
};
