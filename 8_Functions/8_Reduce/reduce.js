// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const getMenCountByYear = (users) => {
  const usersMen = users.filter((user) => {
      if (user.gender === 'male') {
      return user;
    }
  })

  const callBack = (acc, { birthday }) => {
    const birthdayYear = birthday.slice(0, 4);
    if (!_.has(acc, birthdayYear)) {
      acc[birthdayYear] = 1;
    } else {
      acc[birthdayYear] += 1;
    }
    return acc;
  };

  const result = usersMen.reduce(callBack, {});
  return result;
};

export default getMenCountByYear;
// END

/* // BEGIN tutor
const getMenCountByYear = (users) => {
    const men = users.filter(({ gender }) => gender === 'male');
  
    const years = men.map(({ birthday }) => birthday.slice(0, 4));
  
    return years.reduce((acc, year) => {
      const count = _.get(acc, year, 0) + 1;
      return { ...acc, [year]: count };
    }, {});
  };
  
  export default getMenCountByYear;
  // END */
