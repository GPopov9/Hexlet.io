/* // @ts-check

//import Point from './Point.js';
//import Segment from './Segment.js';

// BEGIN (write your solution here)
const reverse = (segment) => {

  const start = segment.getBeginPoint();
  const startX = start.getX();
  const startY = start.getY();

  const end = segment.getEndPoint();
  const endX = end.getX();
  const endY = end.getY();
  
  const startReversed = new Point(endX, endY);
  const endReversed = new Point(startX, startY);
    
  const reversed = new Segment(startReversed, endReversed);

  return reversed;
};

export default reverse;
// END
 */