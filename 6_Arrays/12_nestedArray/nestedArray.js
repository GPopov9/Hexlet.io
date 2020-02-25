// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const superseries = (results) => {
    let winner = 0;
    let match = 0;
    for (const game of results) {
      match = Math.sign(game[0] - game[1]);
      winner += match; 
    }
  
    if (winner > 0) return 'canada';
    if (winner === 0) return null;
    return 'ussr';
  };
  
  export default superseries;
  // END
  
  // BEGIN Tutor
const superseries1 = (scores) => {
    let result = 0;
    for (const score of scores) {
      result += Math.sign(score[0] - score[1]);
    }
  
    if (result > 0) {
      return 'canada';
    }
    if (result < 0) {
      return 'ussr';
    }
  
    return null;
  };
  // END
  