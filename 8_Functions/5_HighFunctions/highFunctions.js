// @ts-check

import { sortBy } from 'lodash';

// BEGIN (write your solution here)
const takeOldest = (users, num = 1) => {
  const sorted = sortBy(users, (user) => Date.parse(user.birthday));
  return sorted.slice(0, num);
};

export default takeOldest;
// END

/* // BEGIN Tutor
const takeOldest = (users, count = 1) => {
    const sorted = sortBy(users, ({ birthday }) => Date.parse(birthday));
    return sorted.slice(0, count);
  };
  
  export default takeOldest;
  // END */