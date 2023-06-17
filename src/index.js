import { Tree } from "./Tree";
import { Node } from "./Node";

function random100array() {
  const randomArray = [];
  for (let i = 0; i < 100; i += 1) {
    randomArray.push(i);
  }
  for (let i = randomArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = randomArray[i];
    randomArray[i] = randomArray[j];
    randomArray[j] = temp;
  }
  return randomArray;
}

const dankTree = new Tree(random100array());
    console.log(dankTree);



  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  //assignment driver code

  prettyPrint(dankTree.root);
  console.log(dankTree.isBalanced(dankTree.root));

  console.log('level order traversal');
  console.log(dankTree.levelOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('pre order traversal');
  console.log(dankTree.preOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('post order traversal');
  console.log(dankTree.postOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('in order traversal');
  console.log(dankTree.inOrderTraversal(dankTree.root, dankTree.printNode));

  dankTree.insert(dankTree.root, 123);
  dankTree.insert(dankTree.root, 112);
  dankTree.insert(dankTree.root, 1235);
  dankTree.insert(dankTree.root, 1323);
  dankTree.insert(dankTree.root, 1524);
  dankTree.insert(dankTree.root, 63521);
  dankTree.insert(dankTree.root, 122);
  dankTree.insert(dankTree.root, 1311);
  dankTree.insert(dankTree.root, 12340);
  dankTree.insert(dankTree.root, 12143);
  dankTree.insert(dankTree.root, 11244);
  dankTree.insert(dankTree.root, 61313);

  prettyPrint(dankTree.root);
  console.log(dankTree.isBalanced(dankTree.root));

  dankTree.root = dankTree.balanceTree(dankTree.root);

  prettyPrint(dankTree.root);
  console.log(dankTree.isBalanced(dankTree.root));

  console.log('level order traversal');
  console.log(dankTree.levelOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('pre order traversal');
  console.log(dankTree.preOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('post order traversal');
  console.log(dankTree.postOrderTraversal(dankTree.root, dankTree.printNode));
  console.log('in order traversal');
  console.log(dankTree.inOrderTraversal(dankTree.root, dankTree.printNode));