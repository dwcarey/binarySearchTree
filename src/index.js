import { sayTree } from "./Tree";
import { Node } from "./Node";
  
  document.body.appendChild(sayTree());

  const nerdNode = new Node('X');
  nerdNode.setLeftNode('left node');
  nerdNode.setRightNode('right node');
  nerdNode.setValue('Y');
  console.log(nerdNode.getLeftNode());
  console.log(nerdNode.getRightNode());
  console.log(nerdNode.getValue());
  
  
  console.log(nerdNode);