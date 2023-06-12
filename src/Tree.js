import { buildTree } from "./helperFunctions";
import { Node } from "./Node";

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
}
export { Tree };