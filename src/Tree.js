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

  levelOrderTraversal(root, func = null) {
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
  }

  getHeight(node) {
    let leftHeight = 0;
    let rightHeight = 0;
    if (node === null) {
      return 0;
    }
    if (node.leftNode !== null) {
      leftHeight = this.getHeight(node.leftNode);
    }
    if (node.rightNode !== null) {
      rightHeight = this.getHeight(node.rightNode);
    }

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    return rightHeight + 1;
  }

  getDepth(node, root) {
    let depth = 0;
    console.log(node);

    if (node === null) {
      return 0;
    }

    let currentNode = root;
    console.log(currentNode);

    while (currentNode.value !== node.value) {
      if (node.value < currentNode.value) {
        depth += 1;
        currentNode = currentNode.leftNode;
      } else {
        depth += 1;
        currentNode = currentNode.rightNode;
      }
    }
    return depth + 1;
  }

  // all of left last left first, then root, then all of right, left first
  inOrderTraversal(root, func = null) {
    if (root === null) {
      return [];
    }

    const result = [];

    function traverse(node) {
      if (node.leftNode !== null) {
        traverse(node.leftNode);
      }

      result.push(node.value);

      if (func !== null) {
        func(node);
      }

      if (node.rightNode !== null) {
        traverse(node.rightNode);
      }
    }

    traverse(root);

    return result;
  }

  preOrderTraversal(root, func = null) {
    if (root === null) {
      return [];
    }

    const result = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      result.push(node.value);

      if (func !== null) {
        func(node);
      }

      traverse(node.leftNode);
      traverse(node.rightNode);
    }

    traverse(root);

    return result;
  }

  postOrderTraversal(root, func = null) {
    if (root === null) {
      return [];
    }

    const result = [];

    function traverse(node) {
      if (node === null) {
        return;
      }
      traverse(node.rightNode);
      traverse(node.leftNode);

      result.push(node.value);

      if (func !== null) {
        func(node);
      }
    }

    traverse(root);

    return result;
  }

  isBalanced(root) {
    const leftHeight = this.getHeight(root.leftNode);
    const rightHeight = this.getHeight(root.rightNode);

    if ((leftHeight > rightHeight) && (leftHeight - rightHeight > 1)) {
      return false;
    }

    if ((leftHeight < rightHeight) && (rightHeight - leftHeight > 1)) {
      return false;
    }
    return false;
  }

  balanceTree(root) {
    const sortedArray = this.inOrderTraversal(root);
    console.log(sortedArray);

    const newBST = buildTree(sortedArray);
    return newBST;
  }
}
export { Tree };
