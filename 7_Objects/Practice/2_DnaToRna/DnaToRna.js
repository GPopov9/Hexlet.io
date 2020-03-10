// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const dnaToRna = (dnaString) => {
    const converter = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U',
    };
    let rnaString = '';
  
    for (let i = 0; i < dnaString.length; i += 1) {
      const char = dnaString[i];
      if (converter.hasOwnProperty(char)) {
        rnaString += `${converter[char]}`;
      } else return null;
    }
    return rnaString;
  };
  
  export default dnaToRna;
  // END

/*   // BEGIN Tutor
const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default (dna) => {
  const rna = [];

  for (const key of dna) {
    const nucleotide = map[key];
    if (!nucleotide) {
      return null;
    }

    rna.push(nucleotide);
  }

  return rna.join('');
};
// END */