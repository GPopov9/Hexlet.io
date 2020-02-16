// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

// BEGIN (write your solution here)
export const makeRectangle = (start, width, height) => cons(start, cons(width, height));
export const getStartPoint = (rectangle) => car(rectangle);
export const getWidth = (rectangle) => car(cdr(rectangle));
export const getHeight = (rectangle) => cdr(cdr(rectangle));
export const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));
export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END



