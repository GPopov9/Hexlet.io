import Node from './Node';

// BEGIN (write your solution here)
export default (list) => {
  let reversed = null;
  let current = list;

  while (current) {
    reversed = new Node(current.getValue(), reversed);
    current = current.getNext();
  }

  return reversed;
};

// END