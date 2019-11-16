import {
    makePoint, getX, getY, toString as pointToString,
  } from '@hexlet/points';
  import { cons, car, cdr } from '@hexlet/pairs';
  
  // BEGIN (write your solution here)
  
  export const makeSegment = (point1, point2) => cons(point1,point2);
  export const startSegment = (segment) => car(segment);
  export const endSegment = (segment) => cdr(segment);
  export const segmentToString = (segment) => (`[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`);
  export const midpointSegment = (segment) => cons((car(startSegment(segment)) + car(endSegment(segment))) / 2, (cdr(startSegment(segment)) + cdr(endSegment(segment))) / 2); 
  
  
  
  
  // END
  