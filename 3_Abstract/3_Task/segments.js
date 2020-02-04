// BEGIN (write your solution here)
import {
  makePoint, getX, getY, toString as pointToString,
} from '@hexlet/points';
import { cons, car, cdr } from '@hexlet/pairs';


export const makeSegment = (point1, point2) => cons(point1, point2);
export const startSegment = (segment) => car(segment);
export const endSegment = (segment) => cdr(segment);
export const segmentToString = (segment) => `[${pointToString(car(segment))}, ${pointToString(cdr(segment))}]`;
export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const midpointX = (getX(startPoint) + getX(endPoint)) / 2;
  const midpointY = (getY(startPoint) + getY(endPoint)) / 2;
  return makePoint(midpointX, midpointY);
};
// END
  