
//const If = func;

const If = (func) => func;
const True = (a) => (b) => a; 
const False = (a) => (b) => b;  



console.log((If)(False)("2")("3"));


// Решение преподавателя

// BEGIN
//export const True = (x) => () => x;
//export const False = () => (y) => y;

// export const If = (f) => f;
// END