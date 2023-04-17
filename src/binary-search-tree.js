const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;

  root() {
    return this.treeRoot;
  }

  add(data) {
    let node = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = node;
      return;
    }

    let pointer = this.treeRoot;
    while (pointer !== null) {
      if (data > pointer.data) {
        if (pointer.right === null) {
          pointer.right = node;
          pointer = null;
        } else {
          pointer = pointer.right;
        }
      } else {
        if (pointer.left === null) {
          pointer.left = node;
          pointer = null;
        } else {
          pointer = pointer.left;
        }
      }
    }
  }

  has(data) {
    let pointer = this.treeRoot;
    while (pointer !== null) {
      if (data === pointer.data) {
        return true;
      }
      if (data > pointer.data) {
        pointer = pointer.right;
      } else {
        pointer = pointer.left;
      }
    }
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};