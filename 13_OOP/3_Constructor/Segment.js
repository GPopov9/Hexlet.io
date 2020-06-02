// @ts-check

// BEGIN (write your solution here)
function getBeginPoint () {
    return this.start;
  }
  
  function getEndPoint () {
    return this.end;
  }
  
  function Segment (start, end) {
    this.start = start;
    this.end = end;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
  };
  
  export default Segment;
  // END