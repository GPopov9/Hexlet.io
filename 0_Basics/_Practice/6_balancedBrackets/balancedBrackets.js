
const areBracketsBalanced = (str) => {
    
    const collection = [];

    for (let i = 0; i < str.length; i++ ) {
        // let char = str[i];
        if (str[i] === '(') {
            collection.push(str[i]);
            
        } else {
            const item = collection.pop();
            if (item === undefined) {
                return false;
            }
        }                   
    }

    if (collection.length !== 0) {
        return false;
    } else  {
        return true;
    }
   
         
         
   
};

// true - yes
//console.log(areBracketsBalanced('()'));
//console.log(areBracketsBalanced('(())'));
//console.log(areBracketsBalanced('(()((((())))))'));
//console.log(areBracketsBalanced(''));
//console.log(areBracketsBalanced('(())(())'));

//false 
//console.log(areBracketsBalanced('(('));
//console.log(areBracketsBalanced('())('));
//console.log(areBracketsBalanced('((())'));
//console.log(areBracketsBalanced('(())())'));
//console.log(areBracketsBalanced('(()(()))))'));
//console.log(areBracketsBalanced(')'));
//console.log(areBracketsBalanced('())(()'));