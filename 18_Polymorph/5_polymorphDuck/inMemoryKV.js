// @ts-check

// import _ from 'lodash';

// BEGIN (write your solution here)
/* class InMemoryKV {
  constructor(obj) {
    this.obj = obj;
    this.cloneObj = _.cloneDeep(this.obj);
  }

  set (key, value) {
    this.cloneObj[key] = value;
  }

  unset (key) {
    this.cloneObj = _.omit(this.cloneObj, key);
  }

  get(key, defaultValue = null) {

    const keys = _.keys(this.cloneObj);

     if (_.includes(keys, key))  {
       return this.cloneObj[key];
     } else {
       return _.get(this.cloneObj, key, defaultValue);
     }

    //

  }

  toObject() {
    return _.cloneDeep(this.cloneObj);
  }
}

export default InMemoryKV; */
// END

// @ts-check

/* import _ from 'lodash';

// BEGIN
export default class InMemoryKV {
  constructor(init = {}) {
    this.map = _.cloneDeep(init);
  }

  set(key, value) {
    this.map[key] = value;
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.map, key, defaultValue);
  }

  toObject() {
    return _.cloneDeep(this.map);
  }
}
// END */