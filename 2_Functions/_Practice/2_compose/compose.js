const compose = (func1, func2) => x => func1;
const f = compose(Math.sqrt, Math.abs);


console.log(f(-4));