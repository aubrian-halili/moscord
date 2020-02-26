const _ = require('lodash');

const asyncHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

const isEmpty = (value) => {
  return _.isNil(value) || _.trim(value) === '';
};

const compact = (...values) => {
  return _.filter(_.flattenDeep(values), (value) => !isEmpty(value));
};

module.exports = {
  asyncHandler,
  isEmpty,
  compact,
};
