import { Tree } from "./Tree";
import { Node } from "./Node";

const dankTree = new Tree([7, 4, 3, 1, 2, 9, 6, 8, 5, 1, 2, 3, 4, 5]);
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

  prettyPrint(dankTree.root);

  dankTree.insert(dankTree.root, 12);
  dankTree.insert(dankTree.root, 11);
  dankTree.insert(dankTree.root, 0);
  dankTree.insert(dankTree.root, 13);
  dankTree.insert(dankTree.root, 14);
  dankTree.insert(dankTree.root, 6);

  console.log(dankTree);

  prettyPrint(dankTree.root);



  dankTree.deleteNode(dankTree.root, 4);
  console.log(dankTree);
  prettyPrint(dankTree.root);


  dankTree.deleteNode(dankTree.root, 5);
  console.log(dankTree);
  prettyPrint(dankTree.root);

  console.log(dankTree.findByValue(dankTree.root, 6));
  console.log(dankTree.findByValue(dankTree.root, 11));
  console.log(dankTree.findByValue(dankTree.root, 12));
  console.log(dankTree.findByValue(dankTree.root, 446));