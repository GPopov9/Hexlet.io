// @ts-check

const makeDecartPoint = (x, y) => {
    const point = {
      angle: Math.atan2(y, x),
      radius: Math.sqrt((x ** 2) + (y ** 2)),
    };
  
    return point;
  };
  
  // BEGIN (write your solution here)
  const getX = (point) => Math.round(point.radius * Math.cos(point.angle));
  const getY = (point) => Math.round(point.radius * Math.sin(point.angle));
  // END
  
  export { makeDecartPoint, getX, getY };

/*   // BEGIN (tutor)
const getAngle = (point) => point.angle;

const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));

const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));
// END */