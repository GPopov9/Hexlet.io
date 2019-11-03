const sumSquareDifference = (n) => {
    let sumSquare = 0; 
    let squareSum = 0; 
    let result = 0;

   for (let i = 1; i <= n; i += 1) {
       sumSquare += Math.pow(i,2);
       squareSum += i;
   }

   squareSum = Math.pow(squareSum,2);
   result = squareSum - sumSquare;


   return result;
};

console.log(sumSquareDifference(10));