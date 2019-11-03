// subtraction
const flip = func => (a,b) => func(b,a);
const sub = (a, b) => a - b;
const reverseSub = flip(sub);
const wop = flip(Math.pow);

//sub(5, 3); // 2
//reverseSub(5, 3); // -2

// exponentiation

//Math.pow(1, 2); // 1
//wop(1, 2); // 2

//Math.pow(3, 2); 9
//wop(3, 2);  8




 

    
console.log(reverseSub(3,2));