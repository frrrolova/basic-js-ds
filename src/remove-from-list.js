const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
function removeKFromList(list, value) {
  let pointer = list;
  let prevNode = null;

  while (pointer !== null) {
    if (pointer.value === value) {
      if (prevNode === null) {
        list = list.next;
        pointer = list;
      } else {
        prevNode.next = pointer.next; //удаляет элемент
        pointer = pointer.next;
      }
    } else {
      prevNode = pointer;
      pointer = pointer.next;
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};
