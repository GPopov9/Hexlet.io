const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (number, divis) => {
        if (number % divis === 0) {
            return divis;
        } else {
            return iter (number, divis + 1);
        }
    };
    if (num === 1) {
        return 1;
    }    
    if (num > 0) {
        return iter(num, 2);
    }
        
    // END
  };
  
  


  console.log(smallestDivisor(1));