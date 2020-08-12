/* // @ts-check
import _ from 'lodash';
// BEGIN (write your solution here)
export default (map) => {
  const data = map.toObject();
  const entries = Object.entries(data);
  entries.forEach(([key]) => map.unset(key));
  entries.forEach(([key, value]) => map.set(value, key));
}; */