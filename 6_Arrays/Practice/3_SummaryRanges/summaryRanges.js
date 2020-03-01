// @ts-check

// BEGIN (write your solution here)
const summaryRanges = (arr) => {
    const result = [];
    let start = null;
  
    for (let i = 0; i < arr.length; i += 1) {
      if (start === null) {
        if (arr[i + 1] === arr[i] + 1) {
          start = arr[i];
        }
      } else if (!(arr[i + 1] === arr[i] + 1)) {
        result.push(`${start}->${arr[i]}`);
        start = null;
      }
    }
    return result;
  };
  
  export default summaryRanges;
  // END

 /*  // BEGIN Tutor's
const getRangeOfSequence = (sequence) => {
    const first = sequence[0];
    const last = sequence[sequence.length - 1];
    return `${first}->${last}`;
  };
  
  const summaryRanges = (numbers) => {
    const ranges = [];
    let sequence = [];
  
    for (let index = 0; index < numbers.length; index += 1) {
      const current = numbers[index];
      const next = numbers[index + 1];
      sequence.push(current);
      if (current + 1 !== next) {
        if (sequence.length > 1) {
          const range = getRangeOfSequence(sequence);
          ranges.push(range);
        }
        sequence = [];
      }
    }
  
    return ranges;
  };
  
  export default summaryRanges;
  // END */