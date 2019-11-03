const concat = (a) => (b) => (c) => (`${a}${b}${c}`);

console.log(concat("1")("2")("3"));