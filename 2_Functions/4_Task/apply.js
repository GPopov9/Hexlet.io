const apply = (x, func, num) => {
    let result = num;

    for (let i = 0; i < x; i += 1) {
        result = func(result);
    }
    return result;
};



console.log(apply(2, Math.sqrt, 16));


/* РЕКУРСИЯ
// BEGIN
const apply = (count, fn, value) => (
    count === 0 ? value : apply(count - 1, fn, fn(value))
  );
  
  export default apply;
  // END */