import { getX, getY } from '@hexlet/points';
// eslint-disable-next-line
import { isEmpty, head, tail, toString } from '@hexlet/pairs-data';

// BEGIN (write your solution here)

const islessThanThreePoints = (list) => {
  const iter = (items, acc) => {
    if (acc > 2) return false; 
    if (isEmpty(items)) return true; 
    return iter(tail(items), acc + 1);
  };

return iter(list, 0);
};

const length = (point1, point2) => {
  const x1 = getX(point1);
  const x2 = getX(point2);
  const y1 = getY(point1);
  const y2 = getY(point2);

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

const calculatePolygonPerimeter = (points) => {
  if (islessThanThreePoints(points)) return null;

  const firstPoint = head(points);

  const iter = (list) => {
    const currentPoint = head(list);
    const tailList = tail(list);
    if (isEmpty(tailList)) return length(currentPoint, firstPoint);

    const otherPoint = head(tailList);
    const result = length(currentPoint, otherPoint);
    return result + iter(tailList);
  };
  return iter(points);
}; 

export default calculatePolygonPerimeter; 
// END
