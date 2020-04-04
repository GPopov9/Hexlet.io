// @ts-check
/* eslint-disable no-console */

import _ from 'lodash';

// BEGIN (write your solution here)
const histogram = (rounds, func) => {
 const result = ['1|','2|','3|','4|','5|','6|',]; 

 for (let round = 0; round < rounds; round += 1) {
  const num = func();
  result[num - 1] += '#';
 }

 result.map((item) => {
  const matches = (item.match(/#/g) || []).length;
  (matches === 0) ? console.log(`${item}`) : console.log(`${item} ${matches}`);
}); 

 //console.log(_.toString(result)); 
}; 

export default histogram;
// END


/* // BEGIN Tutor
export default (roundsCount, rollDie) => {
    const bar = '#';
    const numbers = _.times(roundsCount, rollDie);
    const sides = _.range(1, 7);
  
    const lines = sides.map((side) => {
      const count = numbers.filter((number) => number === side).length;
      const displayCount = count !== 0 ? ` ${count}` : '';
      return `${side}|${bar.repeat(count)}${displayCount}`;
    });
    const str = lines.join('\n');
  
    console.log(str);
  };
  // END */