const { People } = require('./constants');

const listByGender = (gender) => {
  const result = [];

  for (const person of People) {
    if (person['gender'] === gender) {
      result.push(person);
    }
  }
  return result;
};

const groupByDepartment = () => {
  const result = {};

  for (const person of People) {
    const { department: key } = person;

    if (key in result) {
      result[key].push(person);
    } else {
      result[key] = [person];
    }
  }
  return result;
};

module.exports = {
  listByGender,
  groupByDepartment,
};
