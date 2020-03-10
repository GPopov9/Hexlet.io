// BEGIN (write your solution here)
const generate = (num) => {
    const currentLine = [1];
    const currentLineSize = num + 1;
  
    for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
      currentLine[numIndex] = currentLine[numIndex - 1] * (num - numIndex + 1) / numIndex;
    }
  
    return currentLine;
  }; 
  
  export default generate;
  // END

  
// BEGIN tutor
const generateNextRow = (previousRow) => {
    const nextRow = [];
  
    for (let i = 0; i <= previousRow.length; i += 1) {
      const first = previousRow[i - 1] || 0;
      const second = previousRow[i] || 0;
      nextRow[i] = first + second;
    }
  
    return nextRow;
  };
  
  const generate = (rowNumber) => {
    let currentRow = [1];
  
    for (let row = 0; row < rowNumber; row += 1) {
      currentRow = generateNextRow(currentRow);
    }
  
    return currentRow;
  };
  
  export default generate;
  // END