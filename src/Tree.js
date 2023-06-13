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

  delete(root, value) {
    if (root === null) {
      // nope
    }
    if ((root.value !== value) && (value > root.value)) {
      this.delete(root.rightNode, value);
    }
    if ((root.value !== value) && (value < root.value)) {
      this.delete(root.leftNode, value);
    }

    // DELETE

    // variables
    // previous node (parent of value match node)

    // no children - leaf
    // value === root.value && root.leftnode === null && root.rightnode === null
    // return previous node = null

    // one child
    // value === root.value && (root.leftnode === null || root.rightnode === null)
    // return parent node = child of deleted node

    // two children
    // find "next biggest" i.e. go right then left until left node === null

    // if next biggest no children
    // replace the value of the node being deleted with the value of the next biggest
    // delete next biggest by setting its parents relevent node to null

    // if next biggest has right node (can't have left node)
    // replace the value of the node being deleted with the value of the next biggest
    // set left node of parent of next biggest = to child of next biggest
  }
}
export { Tree };
