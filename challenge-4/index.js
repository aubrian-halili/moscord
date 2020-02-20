const calculateValidationNumber = (input) => {
  let result = 0;

  for (const num of `${input}`) {
    result += +num;
  }

  if (`${result}`.length > 1) {
    return calculateValidationNumber(result);
  }
  return result;
};

module.exports = {
  calculateValidationNumber,
};
