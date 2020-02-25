const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const createError = require('http-errors');

const routes = require('routes');
const logger = require('logger');
require('plugins/mongodb');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Integrate API routes
app.use('/api', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;

  logger.error(`${status} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(status).json({ error: err.message });
});

module.exports = app;
