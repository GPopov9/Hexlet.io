const isPrime = num => {
    
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        } 
        return true;   
    } else return false;
};

console.log(isPrime(-7));
console.log(isPrime(-1));
console.log(isPrime(0));
console.log(isPrime(21));
console.log(isPrime(10));