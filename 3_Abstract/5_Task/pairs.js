export const cons = (x, y) => (f) => f(x, y);

// BEGIN (write your solution here)

export const car = (z) => z((x,y) => x); 
export const cdr = (z) => z((x,y) => y);

// END