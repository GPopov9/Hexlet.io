// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

// BEGIN (write your solution here)

export const makeRectangle = (start, width, height) => cons(start, cons(width,height));
export const getStartPoint = (rectangle) => car(rectangle);
export const getWidth = rectangle => car(cdr(rectangle));
export const getHeight = rectangle => cdr(cdr(rectangle));
export const square = rectangle => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = rectangle => 2 * (getWidth(rectangle) + getHeight(rectangle));
export const containsTheOrigin = rectangle => {
  let start = getStartPoint(rectangle);
  let xStart = getX(start);
  let yStart = getY(start);

  let quadrantTopLeft = quadrant(start);
  let quadrantTopRight = quadrant(makePoint(xStart + getWidth(rectangle),yStart));
  let quadrantLowRight = quadrant(makePoint(xStart + getWidth(rectangle),yStart - getHeight(rectangle)));
  let quadrantLowLeft = quadrant(makePoint(xStart,yStart - getHeight(rectangle)));
  
  console.log(quadrantTopRight);
  console.log(quadrantTopLeft);
  console.log(quadrantLowLeft);
  console.log(quadrantLowRight);
  

  if (quadrantTopLeft === 2 && quadrantTopRight === 1 && quadrantLowRight === 4 && quadrantLowLeft === 3) {
    return true;
  } else return false;


};


// END
