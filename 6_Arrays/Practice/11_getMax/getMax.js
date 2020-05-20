// BEGIN (write your solution here)
export const getMax = (arr) => arr.length === 0 ? null : Math.max(...arr);

// END

//Tutor
export const getMax = (coll) => {
    if (coll.length === 0) {
      return null;
    }
  
    let [max, ...rest] = coll;
    for (const value of rest) {
      if (value > max) {
        max = value;
      }
    }
  
    return max;
  };
  // END