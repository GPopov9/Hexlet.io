// @ts-check
// BEGIN (write your solution here)
const calculateDistance = (point1, point2) => Math.sqrt((point2[0] - point1[0]) ** 2 + (point2[1] - point1[1]) ** 2);

export default calculateDistance;
// END

/* // BEGIN (Tutor)
const calculateDistance = (point1, point2) => {
    const deltaX = point2[0] - point1[0];
    const deltaY = point2[1] - point1[1];
  
    return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
  
    // Альтернативный вариант с использованием Math.hypot
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
    // return Math.hypot(deltaX, deltaY);
  };
  
  export default calculateDistance;
  // END */