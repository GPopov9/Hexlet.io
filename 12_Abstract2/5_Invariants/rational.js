/* // @ts-check

import getGcd from './utils.js';

// BEGIN (write your solution here)

const makeRational = (numer, denom) => ({ numer, denom });

const getNumer = (number) => number.numer / getGcd(number.numer, number.denom);

const getDenom = (number) => number.denom / getGcd(number.numer, number.denom);

const add = (number1, number2) => {
  const lcmDenom = number1.denom * number2.denom / getGcd (number1.denom, number2.denom);
  const sumNumer = number1.numer * (lcmDenom / number1.denom) + number2.numer * (lcmDenom / number2.denom);
  const numer = sumNumer / getGcd(sumNumer, lcmDenom);
  const denom = lcmDenom / getGcd(sumNumer, lcmDenom);
  return makeRational(numer, denom);
};

const sub = (number1, number2) => {
  const lcmDenom = number1.denom * number2.denom / getGcd (number1.denom, number2.denom);
  const sumNumer = number1.numer * (lcmDenom / number1.denom) - number2.numer * (lcmDenom / number2.denom);
  const numer = sumNumer / getGcd(sumNumer, lcmDenom);
  const denom = lcmDenom / getGcd(sumNumer, lcmDenom);
  return makeRational(numer, denom);
};

// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};


// BEGIN (Tutor)
const makeRational = (numer, denom) => {
    const gcd = getGcd(numer, denom);
    return { numer: numer / gcd, denom: denom / gcd };
  };
  
  const getNumer = (rational) => rational.numer;
  
  const getDenom = (rational) => rational.denom;
  
  const add = (rational1, rational2) => (
    makeRational(
      getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
      getDenom(rational1) * getDenom(rational2),
    ));
  
  const sub = (rational1, rational2) => (
    makeRational(
      getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
      getDenom(rational1) * getDenom(rational2),
    ));
  // END */