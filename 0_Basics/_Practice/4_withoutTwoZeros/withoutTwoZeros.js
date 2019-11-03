const withoutTwoZeros = (zero,one) => {
    
     // array for all permutations
    let str = "0".repeat(zero) + "1".repeat(one); 
    
    const modifyStr = (str) => { 
        let options = [];
        if (str.length < 2) {
            return str;
        } 
    
        for (let i = 0; i < str.length; i += 1) {
            let char = str[i];
    
            if (str.indexOf(char) != i) {
                continue;
            }
    
            let remainingStr = str.slice(0,i) + str.slice(i+1,str.length);
    
            for (const subOption of modifyStr(remainingStr)){
                options.push(char + subOption);
                
                  
            }
            
        }
        
        return options;
    };

    let arr = modifyStr(str);
    
    let newArr = arr.filter(function(item) {
        return !(item.match(/00/));
    });

    return newArr.length;
     
};


 console.log(withoutTwoZeros(2,4));

