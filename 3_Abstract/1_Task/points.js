import { makePoint, getX, getY } from '@hexlet/points'; // eslint-disable-line

// BEGIN (write your solution here)
export const getQuadrant = (point) => {
  if (getX(point) === 0 || getY(point) === 0) {
    return null;
  } else if (getX(point) > 0 && getY(point) > 0) {
    return 1;
  } else if (getX(point) < 0 && getY(point) > 0) {
    return 2;
  } else if (getX(point) < 0 && getY(point) < 0) {
    return 3;
  } else return 4;
};

export const getSymmetricalPoint = (point) => {
  let newPoint = makePoint(-getX(point),-getY(point));
  return newPoint;
};

export const calculateDistance = (point1, point2) => {
  let distance = Math.sqrt((getX(point2)-getX(point1))**2 + (getY(point2)-getY(point1))**2);
  return distance;
};
// END


// BEGIN решение преподавателя
/* export const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);
  
    if (x > 0 && y > 0) {
      return 1;
    } if (x < 0 && y > 0) {
      return 2;
    } if (x < 0 && y < 0) {
      return 3;
    } if (x > 0 && y < 0) {
      return 4;
    }
  
    return null;
  };
  
  export const getSymmetricalPoint = (point) => makePoint(-getX(point), -getY(point));
  
  export const calculateDistance = (point1, point2) => {
    const dX = getX(point2) - getX(point1);
    const dY = getY(point2) - getY(point1);
    return Math.sqrt((dX ** 2) + (dY ** 2));
  };
  // END */