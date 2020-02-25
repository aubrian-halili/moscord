const mongoose = require('mongoose');
const config = require('config');

const logger = require('logger');

const { MongoDB } = config;
const {
  host,
  port,
  database,
  username,
  password,
} = MongoDB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferCommands: false,
  bufferMaxEntries: 0,
};

// Set up default mongoose connection
let uri = `mongodb://${host}:${port}/${database}`;

if (username && password) {
  uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;
}
mongoose.connect(uri, options)
  .catch((err) => logger.error(err.message));

// Get the default connection
const { connection } = mongoose;
connection.on('connected',
  () => logger.info('MongoDB connected.'));
connection.on('error',
  (err) => logger.error(err.message));
