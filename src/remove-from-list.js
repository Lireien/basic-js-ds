const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l;
  const array = [];

  while (list) {
    array.push(list.value);
    list = list.next;
  }

  let result;

  array
    .filter((value) => value !== k)
    .reverse()
    .map((cur, i) => {
      result = {
        value: cur,
        next: i !== 0 ? result : null,
      };
    });

  return result;
}
// let l = [3, 1, 2, 3, 4, 5];
// let k = 3;

// console.log(removeKFromList(l, k));

module.exports = {
  removeKFromList,
};
