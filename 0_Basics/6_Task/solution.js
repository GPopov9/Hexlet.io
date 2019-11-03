'use strict';

import square from './square';

// BEGIN (write your solution here)
import getTriangleArea from './myMathModule';

export default (n) => getTriangleArea(n, square(n)/2);

// END