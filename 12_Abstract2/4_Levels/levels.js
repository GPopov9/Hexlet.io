/* // @ts-check
// eslint-disable-next-line
import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';

// BEGIN (write your solution here)
const getStartPoint = (rectangle) => rectangle.start;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

export const makeRectangle = (start, width, height) => ({ start, width, height });

export const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));
  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

// END */


/* // BEGIN (Tutor)
const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export {
  makeRectangle,
  containsOrigin,
};
// END */