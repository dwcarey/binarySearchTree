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
    console.log(printNode);
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

  // nodes from current node to leaf node

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



  console.log(dankTree.levelOrderTraversal(dankTree.root, dankTree.printNode));

  console.log(dankTree.inOrderTraversal(dankTree.root, dankTree.printNode));

  console.log(dankTree.preOrderTraversal(dankTree.root, dankTree.printNode));

  console.log(dankTree.postOrderTraversal(dankTree.root, dankTree.printNode));

  console.log(dankTree.getHeight(dankTree.root));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7O0FBRTlCLHFCQUFxQix1Q0FBSTtBQUN6Qjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTyxFQUFFLHlCQUF5QjtBQUN2RTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVztBQUNsRTtBQUNBLG9DQUFvQyxPQUFPLEVBQUUseUJBQXlCO0FBQ3RFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvLi9zcmMvTm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlLy4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlID0gbnVsbCwgbGVmdE5vZGUgPSBudWxsLCByaWdodE5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubGVmdE5vZGUgPSBsZWZ0Tm9kZTtcbiAgICB0aGlzLnJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0TGVmdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdE5vZGU7XG4gIH1cblxuICBnZXRSaWdodE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXRMZWZ0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5sZWZ0Tm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRSaWdodE5vZGUobm9kZSkge1xuICAgIHRoaXMucmlnaHROb2RlID0gbm9kZTtcbiAgfVxufVxuXG5leHBvcnQgeyBOb2RlIH07XG4iLCJpbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlJztcblxuY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKGFycmF5KTtcbiAgfVxuXG4gIGluc2VydChyb290LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJvb3QgPSBuZXdOb2RlO1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgaWYgKG5ld05vZGUudmFsdWUgPCByb290LnZhbHVlKSB7XG4gICAgICB0aGlzLmluc2VydChyb290LmxlZnROb2RlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKChuZXdOb2RlLnZhbHVlIDwgcm9vdC52YWx1ZSkgJiYgKHJvb3QubGVmdE5vZGUgPT09IG51bGwpKSB7XG4gICAgICByb290LmxlZnROb2RlID0gbmV3Tm9kZTtcbiAgICAgIHJldHVybiByb290LmxlZnROb2RlO1xuICAgIH1cblxuICAgIGlmIChuZXdOb2RlLnZhbHVlID4gcm9vdC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnNlcnQocm9vdC5yaWdodE5vZGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoKG5ld05vZGUudmFsdWUgPiByb290LnZhbHVlKSAmJiAocm9vdC5yaWdodE5vZGUgPT09IG51bGwpKSB7XG4gICAgICByb290LnJpZ2h0Tm9kZSA9IG5ld05vZGU7XG4gICAgICByZXR1cm4gcm9vdC5yaWdodE5vZGU7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTm9kZShyb290LCB2YWx1ZSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gcm9vdC52YWx1ZSkge1xuICAgICAgcm9vdC5yaWdodE5vZGUgPSB0aGlzLmRlbGV0ZU5vZGUocm9vdC5yaWdodE5vZGUsIHZhbHVlKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCByb290LnZhbHVlKSB7XG4gICAgICByb290LmxlZnROb2RlID0gdGhpcy5kZWxldGVOb2RlKHJvb3QubGVmdE5vZGUsIHZhbHVlKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAocm9vdC5sZWZ0Tm9kZSA9PT0gbnVsbCAmJiByb290LnJpZ2h0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgLy8gbm9kZSB0byBiZSBkZWxldGVkIGhhcyBubyBjaGlsZHJlblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChyb290LmxlZnROb2RlID09PSBudWxsKSB7XG4gICAgICAvLyBub2RlIHRvIGJlIGRlbGV0ZWQgaGFzIG9ubHkgYSByaWdodCBjaGlsZFxuICAgICAgcmV0dXJuIHJvb3QucmlnaHROb2RlO1xuICAgIH1cbiAgICBpZiAocm9vdC5yaWdodE5vZGUgPT09IG51bGwpIHtcbiAgICAgIC8vIG5vZGUgdG8gYmUgZGVsZXRlZCBoYXMgb25seSBhIGxlZnQgY2hpbGRcbiAgICAgIHJldHVybiByb290LmxlZnROb2RlO1xuICAgIH1cblxuICAgIC8vIG5vZGUgdG8gYmUgZGVsZXRlZCBoYXMgYm90aCBsZWZ0IGFuZCByaWdodCBjaGlsZHJlblxuICAgIGxldCBwYXJlbnROb2RlID0gcm9vdDtcbiAgICBsZXQgc3VjY2Vzc29yTm9kZSA9IHJvb3QucmlnaHROb2RlO1xuXG4gICAgd2hpbGUgKHN1Y2Nlc3Nvck5vZGUubGVmdE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBzdWNjZXNzb3JOb2RlO1xuICAgICAgc3VjY2Vzc29yTm9kZSA9IHBhcmVudE5vZGUubGVmdE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgIT09IHJvb3QpIHtcbiAgICAgIHBhcmVudE5vZGUubGVmdE5vZGUgPSBzdWNjZXNzb3JOb2RlLnJpZ2h0Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZS5yaWdodE5vZGUgPSBzdWNjZXNzb3JOb2RlLnJpZ2h0Tm9kZTtcbiAgICB9XG5cbiAgICByb290LnZhbHVlID0gc3VjY2Vzc29yTm9kZS52YWx1ZTtcblxuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgZmluZEJ5VmFsdWUocm9vdCwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA+IHJvb3QudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRCeVZhbHVlKHJvb3QucmlnaHROb2RlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA8IHJvb3QudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRCeVZhbHVlKHJvb3QubGVmdE5vZGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHJvb3QudmFsdWUpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgfVxuXG4gIGxldmVsT3JkZXJUcmF2ZXJzYWwocm9vdCwgZnVuYyA9IG51bGwpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhdmVyc2FsUXVldWUgPSBbcm9vdF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICB3aGlsZSAodHJhdmVyc2FsUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0cmF2ZXJzYWxRdWV1ZS5zaGlmdCgwKTtcblxuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYXZlcnNhbFF1ZXVlLnB1c2goY3VycmVudE5vZGUubGVmdE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudE5vZGUucmlnaHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYXZlcnNhbFF1ZXVlLnB1c2goY3VycmVudE5vZGUucmlnaHROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgZnVuYyhjdXJyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnROb2RlLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpbnROb2RlKHByaW50Tm9kZSkge1xuICAgIGNvbnNvbGUubG9nKHByaW50Tm9kZSk7XG4gIH1cblxuICBnZXRIZWlnaHQobm9kZSkge1xuICAgIGxldCBsZWZ0SGVpZ2h0ID0gMDtcbiAgICBsZXQgcmlnaHRIZWlnaHQgPSAwO1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKG5vZGUubGVmdE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxlZnRIZWlnaHQgPSB0aGlzLmdldEhlaWdodChub2RlLmxlZnROb2RlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHROb2RlICE9PSBudWxsKSB7XG4gICAgICByaWdodEhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobGVmdEhlaWdodCA+IHJpZ2h0SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbGVmdEhlaWdodCArIDE7XG4gICAgfVxuICAgIHJldHVybiByaWdodEhlaWdodCArIDE7XG4gIH1cblxuICAvLyBhbGwgb2YgbGVmdCBsYXN0IGxlZnQgZmlyc3QsIHRoZW4gcm9vdCwgdGhlbiBhbGwgb2YgcmlnaHQsIGxlZnQgZmlyc3RcbiAgaW5PcmRlclRyYXZlcnNhbChyb290LCBmdW5jID0gbnVsbCkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5sZWZ0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB0cmF2ZXJzZShub2RlLmxlZnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWx1ZSk7XG5cbiAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgIGZ1bmMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnJpZ2h0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB0cmF2ZXJzZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJhdmVyc2Uocm9vdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJlT3JkZXJUcmF2ZXJzYWwocm9vdCwgZnVuYyA9IG51bGwpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaChub2RlLnZhbHVlKTtcblxuICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgZnVuYyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgdHJhdmVyc2Uobm9kZS5sZWZ0Tm9kZSk7XG4gICAgICB0cmF2ZXJzZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgfVxuXG4gICAgdHJhdmVyc2Uocm9vdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcG9zdE9yZGVyVHJhdmVyc2FsKHJvb3QsIGZ1bmMgPSBudWxsKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyYXZlcnNlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgIHRyYXZlcnNlKG5vZGUubGVmdE5vZGUpO1xuXG4gICAgICByZXN1bHQucHVzaChub2RlLnZhbHVlKTtcblxuICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgZnVuYyhub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cmF2ZXJzZShyb290KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBub2RlcyBmcm9tIGN1cnJlbnQgbm9kZSB0byBsZWFmIG5vZGVcblxufVxuZXhwb3J0IHsgVHJlZSB9O1xuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcblxuZnVuY3Rpb24gbWVyZ2UobGVmdEFycmF5LCByaWdodEFycmF5LCBsZWZ0TGVuZ3RoLCByaWdodExlbmd0aCkge1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IDA7XG5cbiAgZG8ge1xuICAgIGlmIChsZWZ0QXJyYXlbaV0gPiByaWdodEFycmF5W2pdKSB7XG4gICAgICBzb3J0ZWRBcnJheVtrXSA9IHJpZ2h0QXJyYXlbal07XG4gICAgICBrICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRlZEFycmF5W2tdID0gbGVmdEFycmF5W2ldO1xuICAgICAgayArPSAxO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfSB3aGlsZSAoaSA8IGxlZnRMZW5ndGggJiYgaiA8IHJpZ2h0TGVuZ3RoKTtcblxuICB3aGlsZSAoaSA8IGxlZnRMZW5ndGgpIHtcbiAgICBzb3J0ZWRBcnJheVtrXSA9IGxlZnRBcnJheVtpXTtcbiAgICBrICs9IDE7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgd2hpbGUgKGogPCByaWdodExlbmd0aCkge1xuICAgIHNvcnRlZEFycmF5W2tdID0gcmlnaHRBcnJheVtqXTtcbiAgICBrICs9IDE7XG4gICAgaiArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXksIGxvdywgaGlnaCkge1xuXG4gIGlmIChsb3cgPT09IHVuZGVmaW5lZCkge1xuICAgIGxvdyA9IDA7XG4gIH1cblxuICBpZiAoaGlnaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGlnaCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gIH1cblxuICBpZiAobG93IDwgaGlnaCkge1xuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG5cbiAgICBjb25zdCBsZWZ0QXJyYXlUZW1wID0gbWVyZ2VTb3J0KGFycmF5LCBsb3csIG1pZCk7XG4gICAgY29uc3QgcmlnaHRBcnJheVRlbXAgPSBtZXJnZVNvcnQoYXJyYXksIG1pZCArIDEsIGhpZ2gpO1xuXG4gICAgcmV0dXJuIG1lcmdlKGxlZnRBcnJheVRlbXAsIHJpZ2h0QXJyYXlUZW1wLCBsZWZ0QXJyYXlUZW1wLmxlbmd0aCwgcmlnaHRBcnJheVRlbXAubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gW2FycmF5W2xvd11dOyAvLyBvbmNlIGFycmF5IGlzIGxlbmd0aCAxIHJldHVybiB0aGUgYXJyYXkgb2YgMSB3aGljaCBpcyB1c2VkIGluIHRoZSByZXR1cm5lZCBtZXJnZSBmdW5jdGlvblxufVxuXG5mdW5jdGlvbiBkZXB1ZGUoYXJyYXkpIHtcbiAgY29uc3QgZGVkdXBlQXJyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGRlZHVwZUFycmF5LmluY2x1ZGVzKGFycmF5W2ldKSkge1xuICAgICAgLy8gbm9wZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWR1cGVBcnJheS5wdXNoKGFycmF5W2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVkdXBlQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJTVChhcnJheSwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkXSk7XG5cbiAgICBub2RlLmxlZnROb2RlID0gY3JlYXRlQlNUKGFycmF5LCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodE5vZGUgPSBjcmVhdGVCU1QoYXJyYXksIG1pZCArIDEsIGVuZCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgY29uc29sZS5sb2coYXJyYXkpO1xuICBjb25zdCBkZWR1cGVBcnJheSA9IGRlcHVkZShhcnJheSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gbWVyZ2VTb3J0KGRlZHVwZUFycmF5KTtcbiAgY29uc3QgYmluYXJ5U2VhcmNoVHJlZSA9IGNyZWF0ZUJTVChzb3J0ZWRBcnJheSwgMCwgc29ydGVkQXJyYXkubGVuZ3RoIC0gMSk7XG4gIGNvbnNvbGUubG9nKHNvcnRlZEFycmF5KTtcbiAgY29uc29sZS5sb2coYmluYXJ5U2VhcmNoVHJlZSk7XG4gIHJldHVybiBiaW5hcnlTZWFyY2hUcmVlO1xufVxuXG5leHBvcnQgeyBtZXJnZVNvcnQsIGJ1aWxkVHJlZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcblxuY29uc3QgZGFua1RyZWUgPSBuZXcgVHJlZShbNywgNCwgMywgMSwgMiwgOSwgNiwgOCwgNSwgMSwgMiwgMywgNCwgNV0pO1xuICAgIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcblxuXG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodE5vZGUsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLnZhbHVlfWApO1xuICAgIGlmIChub2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHByZXR0eVByaW50KGRhbmtUcmVlLnJvb3QpO1xuXG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxMik7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxMSk7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAwKTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDEzKTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDE0KTtcbiAgZGFua1RyZWUuaW5zZXJ0KGRhbmtUcmVlLnJvb3QsIDYpO1xuXG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcblxuICBwcmV0dHlQcmludChkYW5rVHJlZS5yb290KTtcblxuXG5cbiAgZGFua1RyZWUuZGVsZXRlTm9kZShkYW5rVHJlZS5yb290LCA0KTtcbiAgY29uc29sZS5sb2coZGFua1RyZWUpO1xuICBwcmV0dHlQcmludChkYW5rVHJlZS5yb290KTtcblxuXG4gIGRhbmtUcmVlLmRlbGV0ZU5vZGUoZGFua1RyZWUucm9vdCwgNSk7XG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlKTtcbiAgcHJldHR5UHJpbnQoZGFua1RyZWUucm9vdCk7XG5cbiAgY29uc29sZS5sb2coZGFua1RyZWUuZmluZEJ5VmFsdWUoZGFua1RyZWUucm9vdCwgNikpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCAxMSkpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCAxMikpO1xuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5maW5kQnlWYWx1ZShkYW5rVHJlZS5yb290LCA0NDYpKTtcblxuXG5cbiAgY29uc29sZS5sb2coZGFua1RyZWUubGV2ZWxPcmRlclRyYXZlcnNhbChkYW5rVHJlZS5yb290LCBkYW5rVHJlZS5wcmludE5vZGUpKTtcblxuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5pbk9yZGVyVHJhdmVyc2FsKGRhbmtUcmVlLnJvb3QsIGRhbmtUcmVlLnByaW50Tm9kZSkpO1xuXG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlLnByZU9yZGVyVHJhdmVyc2FsKGRhbmtUcmVlLnJvb3QsIGRhbmtUcmVlLnByaW50Tm9kZSkpO1xuXG4gIGNvbnNvbGUubG9nKGRhbmtUcmVlLnBvc3RPcmRlclRyYXZlcnNhbChkYW5rVHJlZS5yb290LCBkYW5rVHJlZS5wcmludE5vZGUpKTtcblxuICBjb25zb2xlLmxvZyhkYW5rVHJlZS5nZXRIZWlnaHQoZGFua1RyZWUucm9vdCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==