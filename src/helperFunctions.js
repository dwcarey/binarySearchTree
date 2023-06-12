import { Node } from "./Node";

function merge(leftArray, rightArray, leftLength, rightLength) {
  const sortedArray = [];

  let i = 0;
  let j = 0;
  let k = 0;

  do {
    if (leftArray[i] > rightArray[j]) {
      sortedArray[k] = rightArray[j];
      k += 1;
      j += 1;
    } else {
      sortedArray[k] = leftArray[i];
      k += 1;
      i += 1;
    }
  } while (i < leftLength && j < rightLength);

  while (i < leftLength) {
    sortedArray[k] = leftArray[i];
    k += 1;
    i += 1;
  }

  while (j < rightLength) {
    sortedArray[k] = rightArray[j];
    k += 1;
    j += 1;
  }

  return sortedArray;
}

function mergeSort(array, low, high) {

  if (low === undefined) {
    low = 0;
  }

  if (high === undefined) {
    high = array.length - 1;
  }

  if (low < high) {
    const mid = Math.floor((low + high) / 2);

    const leftArrayTemp = mergeSort(array, low, mid);
    const rightArrayTemp = mergeSort(array, mid + 1, high);

    return merge(leftArrayTemp, rightArrayTemp, leftArrayTemp.length, rightArrayTemp.length);
  }
  return [array[low]]; // once array is length 1 return the array of 1 which is used in the returned merge function
}

function depude(array) {
  const dedupeArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (dedupeArray.includes(array[i])) {
      // nope
    } else {
      dedupeArray.push(array[i]);
    }
  }

  return dedupeArray;
}

function createBST(array, start, end) {
    if (start > end) {
        return null;
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);

    node.leftNode = createBST(array, start, mid - 1);
    node.rightNode = createBST(array, mid + 1, end);

    return node;
}

function buildTree(array) {
    console.log(array);
  const dedupeArray = depude(array);
  const sortedArray = mergeSort(dedupeArray);
  const binarySearchTree = createBST(sortedArray, 0, sortedArray.length - 1);
  console.log(sortedArray);
  console.log(binarySearchTree);
  return binarySearchTree;
}

export { mergeSort, buildTree };



//bst


//base case
//