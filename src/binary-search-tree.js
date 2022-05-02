const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._rootNode = null;
  }

  root() {
    return this._rootNode;
  }

  add(data) {
    if (this._rootNode == null) {
      this._rootNode = new Node(data);
    } else {
      this.addNode(this._rootNode, data);
    }
  }
  addNode(node, data) {
    if (data < node.data) {
      if (node.left == null) {
        node.left = new Node(data);
        return;
      } else {
        return this.addNode(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right == null) {
        node.right = new Node(data);
        return;
      } else {
        return this.addNode(node.right, data);
      }
    }
  }

  has(data) {
    let pointer = this._rootNode;
    while (pointer) {
      if (data == pointer.data) {
        return true;
      }
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return false;
  }

  find(data) {
    let pointer = this._rootNode;
    while (pointer.data !== data) {
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
      if (pointer === null) {
        return null;
      }
    }
    return pointer;
  }

  remove(data) {
    this._rootNode = removeNode(this._rootNode, data);

    function removeNode (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tmpNode = node.right;
        while (tmpNode.left !== null) {
          tmpNode = tmpNode.left;
        }
        node.data = tmpNode.data;
        node.right = removeNode(node.right, tmpNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this._treeRoot = removeNode(this._treeRoot, data);
  }

  min() {
    let pointer = this._rootNode;
    while (pointer.left !== null) {
      pointer = pointer.left;
    }
    return pointer.data;
  }

  max() {
    let pointer = this._rootNode;
    while (pointer.right !== null) {
      pointer = pointer.right;
    }
    return pointer.data;
  }
}

module.exports = {
  BinarySearchTree,
};
