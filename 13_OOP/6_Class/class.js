import _ from 'lodash';

// BEGIN (write your solution here)
class Cart {
 
  constructor () {
    this.goods = [];
    this.count = 0;
  }

  getItems() {   
    return this.goods;
}

  addItem (good, count) {
    this.good = good;
    this.count = count;
    this.goods.push([good.name, good.price, count]);
  }

  getCost() {
    return this.goods.reduce((acc, [name, price, count]) => acc + price * count, 0);
  }

  getCount() {
    return this.goods.reduce((acc, [name, price, count]) => acc + count, 0);
  }
  
};

export default Cart;
// END

// BEGIN (Tutor)
export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(good, count) {
      this.items.push({ good, count });
    }
  
    getItems() {
      return this.items;
    }
  
    getCount() {
      return _.sumBy(this.items, (item) => item.count);
    }
  
    getCost() {
      return _.sumBy(this.items, (item) => item.good.price * item.count);
    }
  }
  // END