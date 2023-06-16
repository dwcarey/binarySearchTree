/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value = null, leftNode = null, rightNode = null) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  getValue() {
    return this.value;
  }

  getLeftNode() {
    return this.leftNode;
  }

  getRightNode() {
    return this.rightNode;
  }

  setValue(value) {
    this.value = value;
  }

  setLeftNode(node) {
    this.leftNode = node;
  }

  setRightNode(node) {
    this.rightNode = node;
  }
}




/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/Node.js");



class Tree {
  constructor(array) {
    this.root = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.buildTree)(array);
  }

  insert(root, value) {
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(value);
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



/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTree: () => (/* binding */ buildTree),
/* harmony export */   mergeSort: () => (/* binding */ mergeSort)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


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
    let node = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(array[mid]);

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/Node.js");



const dankTree = new _Tree__WEBPACK_IMPORTED_MODULE_0__.Tree([7, 4, 3, 1, 2, 9, 6, 8, 5, 1, 2, 3, 4, 5]);
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



  console.log(dankTree.levelOrderTraveral(dankTree.root, dankTree.printNode));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlLy4vc3JjL05vZGUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS8uL3NyYy9UcmVlLmpzIiwid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIGxlZnROb2RlID0gbnVsbCwgcmlnaHROb2RlID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxlZnROb2RlID0gbGVmdE5vZGU7XG4gICAgdGhpcy5yaWdodE5vZGUgPSByaWdodE5vZGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldExlZnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnROb2RlO1xuICB9XG5cbiAgZ2V0UmlnaHROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0Tm9kZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0TGVmdE5vZGUobm9kZSkge1xuICAgIHRoaXMubGVmdE5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0UmlnaHROb2RlKG5vZGUpIHtcbiAgICB0aGlzLnJpZ2h0Tm9kZSA9IG5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgTm9kZSB9O1xuIiwiaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZSc7XG5cbmNsYXNzIFRyZWUge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gIH1cblxuICBpbnNlcnQocm9vdCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByb290ID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGlmIChuZXdOb2RlLnZhbHVlIDwgcm9vdC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnNlcnQocm9vdC5sZWZ0Tm9kZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICgobmV3Tm9kZS52YWx1ZSA8IHJvb3QudmFsdWUpICYmIChyb290LmxlZnROb2RlID09PSBudWxsKSkge1xuICAgICAgcm9vdC5sZWZ0Tm9kZSA9IG5ld05vZGU7XG4gICAgICByZXR1cm4gcm9vdC5sZWZ0Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAobmV3Tm9kZS52YWx1ZSA+IHJvb3QudmFsdWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0KHJvb3QucmlnaHROb2RlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKChuZXdOb2RlLnZhbHVlID4gcm9vdC52YWx1ZSkgJiYgKHJvb3QucmlnaHROb2RlID09PSBudWxsKSkge1xuICAgICAgcm9vdC5yaWdodE5vZGUgPSBuZXdOb2RlO1xuICAgICAgcmV0dXJuIHJvb3QucmlnaHROb2RlO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZU5vZGUocm9vdCwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA+IHJvb3QudmFsdWUpIHtcbiAgICAgIHJvb3QucmlnaHROb2RlID0gdGhpcy5kZWxldGVOb2RlKHJvb3QucmlnaHROb2RlLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgcm9vdC52YWx1ZSkge1xuICAgICAgcm9vdC5sZWZ0Tm9kZSA9IHRoaXMuZGVsZXRlTm9kZShyb290LmxlZnROb2RlLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHJvb3QubGVmdE5vZGUgPT09IG51bGwgJiYgcm9vdC5yaWdodE5vZGUgPT09IG51bGwpIHtcbiAgICAgIC8vIG5vZGUgdG8gYmUgZGVsZXRlZCBoYXMgbm8gY2hpbGRyZW5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocm9vdC5sZWZ0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgLy8gbm9kZSB0byBiZSBkZWxldGVkIGhhcyBvbmx5IGEgcmlnaHQgY2hpbGRcbiAgICAgIHJldHVybiByb290LnJpZ2h0Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHROb2RlID09PSBudWxsKSB7XG4gICAgICAvLyBub2RlIHRvIGJlIGRlbGV0ZWQgaGFzIG9ubHkgYSBsZWZ0IGNoaWxkXG4gICAgICByZXR1cm4gcm9vdC5sZWZ0Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBub2RlIHRvIGJlIGRlbGV0ZWQgaGFzIGJvdGggbGVmdCBhbmQgcmlnaHQgY2hpbGRyZW5cbiAgICBsZXQgcGFyZW50Tm9kZSA9IHJvb3Q7XG4gICAgbGV0IHN1Y2Nlc3Nvck5vZGUgPSByb290LnJpZ2h0Tm9kZTtcblxuICAgIHdoaWxlIChzdWNjZXNzb3JOb2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnROb2RlID0gc3VjY2Vzc29yTm9kZTtcbiAgICAgIHN1Y2Nlc3Nvck5vZGUgPSBwYXJlbnROb2RlLmxlZnROb2RlO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlICE9PSByb290KSB7XG4gICAgICBwYXJlbnROb2RlLmxlZnROb2RlID0gc3VjY2Vzc29yTm9kZS5yaWdodE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUucmlnaHROb2RlID0gc3VjY2Vzc29yTm9kZS5yaWdodE5vZGU7XG4gICAgfVxuXG4gICAgcm9vdC52YWx1ZSA9IHN1Y2Nlc3Nvck5vZGUudmFsdWU7XG5cbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGZpbmRCeVZhbHVlKHJvb3QsIHZhbHVlKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiByb290LnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kQnlWYWx1ZShyb290LnJpZ2h0Tm9kZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCByb290LnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kQnlWYWx1ZShyb290LmxlZnROb2RlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSByb290LnZhbHVlKSB7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gIH1cblxuICBsZXZlbE9yZGVyVHJhdmVyYWwocm9vdCwgZnVuYyA9IG51bGwpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhdmVyc2FsUXVldWUgPSBbcm9vdF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICB3aGlsZSAodHJhdmVyc2FsUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0cmF2ZXJzYWxRdWV1ZS5zaGlmdCgwKTtcblxuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYXZlcnNhbFF1ZXVlLnB1c2goY3VycmVudE5vZGUubGVmdE5vZGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoY3VycmVudE5vZGUucmlnaHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYXZlcnNhbFF1ZXVlLnB1c2goY3VycmVudE5vZGUucmlnaHROb2RlKTtcbiAgICAgIH1cblxuXG4gICAgICBpZiAoZnVuYyAhPT0gbnVsbCkge1xuICAgICAgICBmdW5jKGN1cnJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goY3VycmVudE5vZGUudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcmludE5vZGUocHJpbnROb2RlKSB7XG4gICAgY29uc29sZS5sb2cocHJpbnROb2RlKTtcbiAgfVxufVxuZXhwb3J0IHsgVHJlZSB9O1xuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcblxuZnVuY3Rpb24gbWVyZ2UobGVmdEFycmF5LCByaWdodEFycmF5LCBsZWZ0TGVuZ3RoLCByaWdodExlbmd0aCkge1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IDA7XG5cbiAgZG8ge1xuICAgIGlmIChsZWZ0QXJyYXlbaV0gPiByaWdodEFycmF5W2pdKSB7XG4gICAgICBzb3J0ZWRBcnJheVtrXSA9IHJpZ2h0QXJyYXlbal07XG4gICAgICBrICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRlZEFycmF5W2tdID0gbGVmdEFycmF5W2ldO1xuICAgICAgayArPSAxO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGxlZnRMZW5ndGggJiYgaiA8IHJpZ2h0TGVuZ3RoKTtcblxuICB3aGlsZSAoaSA8IGxlZnRMZW5ndGgpIHtcbiAgICBzb3J0ZWRBcnJheVtrXSA9IGxlZnRBcnJheVtpXTtcbiAgICBrICs9IDE7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgd2hpbGUgKGogPCByaWdodExlbmd0aCkge1xuICAgIHNvcnRlZEFycmF5W2tdID0gcmlnaHRBcnJheVtqXTtcbiAgICBrICs9IDE7XG4gICAgaiArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXksIGxvdywgaGlnaCkge1xuXG4gIGlmIChsb3cgPT09IHVuZGVmaW5lZCkge1xuICAgIGxvdyA9IDA7XG4gIH1cblxuICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGlnaCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gIH1cblxuICBpZiAobG93IDwgaGlnaCkge1xuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG5cbiAgICBjb25zdCBsZWZ0QXJyYXlUZW1wID0gbWVyZ2VTb3J0KGFycmF5LCBsb3csIG1pZCk7XG4gICAgY29uc3QgcmlnaHRBcnJheVRlbXAgPSBtZXJnZVNvcnQoYXJyYXksIG1pZCArIDEsIGhpZ2gpO1xuXG4gICAgcmV0dXJuIG1lcmdlKGxlZnRBcnJheVRlbXAsIHJpZ2h0QXJyYXlUZW1wLCBsZWZ0QXJyYXlUZW1wLmxlbmd0aCwgcmlnaHRBcnJheVRlbXAubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gW2FycmF5W2xvd11dOyAvLyBvbmNlIGFycmF5IGlzIGxlbmd0aCAxIHJldHVybiB0aGUgYXJyYXkgb2YgMSB3aGljaCBpcyB1c2VkIGluIHRoZSByZXR1cm5lZCBtZXJnZSBmdW5jdGlvblxufVxuXG5mdW5jdGlvbiBkZXB1ZGUoYXJyYXkpIHtcbiAgY29uc3QgZGVkdXBlQXJyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGRlZHVwZUFycmF5LmluY2x1ZGVzKGFycmF5W2ldKSkge1xuICAgICAgLy8gbm9wZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWR1cGVBcnJheS5wdXNoKGFycmF5W2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVkdXBlQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJTVChhcnJheSwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkXSk7XG5cbiAgICBub2RlLmxlZnROb2RlID0gY3JlYXRlQlNUKGFycmF5LCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodE5vZGUgPSBjcmVhdGVCU1QoYXJyYXksIG1pZCArIDEsIGVuZCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgY29uc29sZS5sb2coYXJyYXkpO1xuICBjb25zdCBkZWR1cGVBcnJheSA9IGRlcHVkZShhcnJheSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gbWVyZ2VTb3J0KGRlZHVwZUFycmF5KTtcbiAgY29uc3QgYmluYXJ5U2VhcmNoVHJlZSA9IGNyZWF0ZUJTVChzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSk7XG4gIGNvbnNvbGUubG9nKHNvcnRlZEFycmF5KTtcbiAgY29uc29sZS5sb2coYmluYXJ5U2VhcmNoVHJlZSk7XG4gIHJldHVybiBiaW5hcnlTZWFyY2hUcmVlO1xufVxuXG5leHBvcnQgeyBtZXJnZVNvcnQsIGJ1aWxkVHJlZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcblxuY29uc3QgZGFua1RyZWUgPSBuZXcgVHJlZShbNywgNCwgMywgMSwgMiwgOSwgNiwgOCwgNSwgMSwgMiwgMywgNCwgNV0pO1xuICAgIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcblxuXG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodE5vZGUsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLnZhbHVlfWApO1xuICAgIGlmIChub2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHByZXR0eVByaW50KGRhbmtUcmVlLnJvb3QpO1xuXG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxMik7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxMSk7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAwKTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDEzKTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDE0KTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDYpO1xuXG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcblxuICBwcmV0dHlQcmludChkYW5rVHJlZS5yb290KTtcblxuXG5cbiAgZGFua1RyZWUuZGVsZXRlTm9kZShkYW5rVHJlZS5yb290LCA0KTtcbiAgY29uc29sZS5sb2coZGFua1RyZWUpO1xuICBwcmV0dHlQcmludChkYW5rVHJlZS5yb290KTtcblxuXG4gIGRhbmtUcmVlLmRlbGV0ZU5vZGUoZGFua1RyZWUucm9vdCwgNSk7XG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcbiAgcHJldHR5UHJpbnQoZGFua1RyZWUucm9vdCk7XG5cbiAgY29uc29sZS5sb2coZGFua1RyZWUuZmluZEJ5VmFsdWUoZGFua1RyZWUucm9vdCwgNikpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCAxMSkpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCAxMikpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCA0NDYpKTtcblxuXG5cbiAgY29uc29sZS5sb2coZGFua1RyZWUubGV2ZWxPcmRlclRyYXZlcmFsKGRhbmtUcmVlLnJvb3QsIGRhbmtUcmVlLnByaW50Tm9kZSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9