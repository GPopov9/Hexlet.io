/* // @ts-check

const getImpelementation = require('../implementations');

const makeCart = getImpelementation();

// BEGIN (write your solution here)

// BEGIN
test('Cart', () => {
  const cart = makeCart();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({ name: 'car', price: 3 }, 5);
  expect(cart.getItems()).toHaveLength(1);
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems()).toHaveLength(2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});
// END */