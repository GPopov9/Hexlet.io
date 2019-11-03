  

const pow = (a, b) => Math.pow(a,b);
const multiply = (a, b) => a * b;
const partialApply = (fn, arg2) => arg1 => fn(arg1, arg2);

const f1 = partialApply(pow, 2);
const f2 = partialApply(multiply, 5);

// для инфы - решение препода
// BEGIN
export default (f, second) => first => f(first, second);
// END

console.log(f2(2));