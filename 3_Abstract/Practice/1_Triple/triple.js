/* eslint default-case: 0, consistent-return: 0 */
// BEGIN (write your solution here)
export const make = (x, y, z) => (f) => f(x,y,z);
export const get1 = (a) => a((x,y,z) => x);
export const get2 = (a) => a((x,y,z) => y);
export const get3 = (a) => a((x,y,z) => z);
// END

// BEGIN преподаватель
/* export const make = (a, b, c) => (
    (message) => {
      switch (message) {
        case 'get1':
          return a;
        case 'get2':
          return b;
        case 'get3':
          return c;
      }
    });
  
  export const get1 = (triple) => triple('get1');
  
  export const get2 = (triple) => triple('get2');
  
  export const get3 = (triple) => triple('get3'); */
  // END