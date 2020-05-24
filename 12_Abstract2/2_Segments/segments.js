/* // @ts-check

import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN (write your solution here)

export const makeSegment = (point1, point2) => {
  const beginPoint = makeDecartPoint(getX(point1), getY(point1));
  const endPoint = makeDecartPoint(getX(point2), getY(point2));
  const result = { beginPoint, endPoint };
  return result;
};

export const getBeginPoint = (segment) => segment.beginPoint;
export const getEndPoint = (segment) => segment.endPoint;
export const getMidpointOfSegment = (segment) => {
  const midpointX = (getX(getBeginPoint(segment)) + getX(getEndPoint(segment))) / 2;
  const midpointY = (getY(getBeginPoint(segment)) + getY(getEndPoint(segment))) / 2;
  return makeDecartPoint(midpointX, midpointY);
};

// END

// BEGIN (Tutor)
const makeSegment = (point1, point2) => {
    const segment = { beginPoint: point1, endPoint: point2 };
    return segment;
  };
  
  const getBeginPoint = (segment) => segment.beginPoint;
  
  const getEndPoint = (segment) => segment.endPoint;
  
  const getMidpointOfSegment = (segment) => {
    const beginPoint = getBeginPoint(segment);
    const endPoint = getEndPoint(segment);
  
    const x = (getX(beginPoint) + getX(endPoint)) / 2;
    const y = (getY(beginPoint) + getY(endPoint)) / 2;
  
    return makeDecartPoint(x, y);
  };
  
  export {
    makeSegment,
    getBeginPoint,
    getEndPoint,
    getMidpointOfSegment,
  };
  // END */