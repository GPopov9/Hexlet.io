// BEGIN (write your solution here)
import {default as cube} from  './numbers1.js'; // импорт default из файла, так как там дефолтный экспорт 

// numbers2.js
import {pow2, sum2, sub2} from './numbers2.js';
import {default as multi2} from './numbers2.js';

//numbers3.js 
import {default as sqrt3} from './numbers3.js';

//export all functions
export {pow2 as pow, sum2 as sum, sub2 as sub, multi2 as multi, sqrt3 as sqrt};

export default cube;



// END
