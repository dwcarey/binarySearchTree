import { buildTree } from './helperFunctions';
import { Node } from './Node';

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(root, value) {
    const newNode = new Node(value);
    if (root === null) {
      root = newNode;
      return root;
    }

    if (newNode.value < root.value) {
      this.insert(root.leftNode, value);
    }

    if ((newNode.value < root.value) && (root.leftNode === null)) {
      root.leftNode = newNode;
      return root.leftNode;
    }

    if (newNode.value > root.value) {
      this.insert(root.rightNode, value);
    }

    if ((newNode.value > root.value) && (root.rightNode === null)) {
      root.rightNode = newNode;
      return root.rightNode;
    }
  }

  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value > root.value) {
      root.rightNode = this.deleteNode(root.rightNode, value);
      return root;
    }
    if (value < root.value) {
      root.leftNode = this.deleteNode(root.leftNode, value);
      return root;
    }
    if (root.leftNode === null && root.rightNode === null) {
      // node to be deleted has no children
      return null;
    }
    if (root.leftNode === null) {
      // node to be deleted has only a right child
      return root.rightNode;
    }
    if (root.rightNode === null) {
      // node to be deleted has only a left child
      return root.leftNode;
    }

    // node to be deleted has both left and right children
    let parentNode = root;
    let successorNode = root.rightNode;

    while (successorNode.leftNode !== null) {
      parentNode = successorNode;
      successorNode = parentNode.leftNode;
    }

    if (parentNode !== root) {
      parentNode.leftNode = successorNode.rightNode;
    } else {
      parentNode.rightNode = successorNode.rightNode;
    }

    root.value = successorNode.value;

    return root;
  }

  findByValue(root, value) {
    if (root === null) {
      return null;
    }
    if (value > root.value) {
      return this.findByValue(root.rightNode, value);
    }
    if (value < root.value) {
      return this.findByValue(root.leftNode, value);
    }

    if (value === root.value) {
      return root;
    }
  }

  levelOrderTraveral(root, func = null) {
    if (root === null) {
      return null;
    }

    const traversalQueue = [root];
    const result = [];

    while (traversalQueue.length > 0) {
      const currentNode = traversalQueue.shift(0);

      if (currentNode.leftNode !== null) {
        traversalQueue.push(currentNode.leftNode);
      }
      
      if (currentNode.rightNode !== null) {
        traversalQueue.push(currentNode.rightNode);
      }


      if (func !== null) {
        func(currentNode);
      }

      result.push(currentNode.value);
    }

    return result;
  }

  printNode(printNode) {
    console.log(printNode);
  }
}
export { Tree };
