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





//bst


//base case
//

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

  console.log(dankTree);

  prettyPrint(dankTree.root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQzhCO0FBQ2hCOztBQUU5QjtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFTO0FBQzdCOzs7QUFHQTtBQUNBLDRCQUE0Qix1Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzhCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHVDQUFJOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQzs7OztBQUloQzs7O0FBR0E7QUFDQTs7Ozs7O1VDdkdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7O0FBRTlCLHFCQUFxQix1Q0FBSTtBQUN6Qjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTyxFQUFFLHlCQUF5QjtBQUN2RTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsV0FBVztBQUNsRTtBQUNBLG9DQUFvQyxPQUFPLEVBQUUseUJBQXlCO0FBQ3RFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvLi9zcmMvTm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlLy4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnlzZWFyY2h0cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5c2VhcmNodHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeXNlYXJjaHRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlID0gbnVsbCwgbGVmdE5vZGUgPSBudWxsLCByaWdodE5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubGVmdE5vZGUgPSBsZWZ0Tm9kZTtcbiAgICB0aGlzLnJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0TGVmdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdE5vZGU7XG4gIH1cblxuICBnZXRSaWdodE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXRMZWZ0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5sZWZ0Tm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRSaWdodE5vZGUobm9kZSkge1xuICAgIHRoaXMucmlnaHROb2RlID0gbm9kZTtcbiAgfVxufVxuXG5leHBvcnQgeyBOb2RlIH07XG4iLCJpbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gICAgfVxuXG5cbiAgICBpbnNlcnQocm9vdCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJvb3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3Tm9kZS52YWx1ZSA8IHJvb3QudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHJvb3QubGVmdE5vZGUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgobmV3Tm9kZS52YWx1ZSA8IHJvb3QudmFsdWUpICYmIChyb290LmxlZnROb2RlID09PSBudWxsKSkge1xuICAgICAgICAgICAgcm9vdC5sZWZ0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5sZWZ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdOb2RlLnZhbHVlID4gcm9vdC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnQocm9vdC5yaWdodE5vZGUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgobmV3Tm9kZS52YWx1ZSA+IHJvb3QudmFsdWUpICYmIChyb290LnJpZ2h0Tm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJvb3QucmlnaHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiByb290LnJpZ2h0Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IFRyZWUgfTsiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vTm9kZVwiO1xuXG5mdW5jdGlvbiBtZXJnZShsZWZ0QXJyYXksIHJpZ2h0QXJyYXksIGxlZnRMZW5ndGgsIHJpZ2h0TGVuZ3RoKSB7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gW107XG5cbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG4gIGxldCBrID0gMDtcblxuICBkbyB7XG4gICAgaWYgKGxlZnRBcnJheVtpXSA+IHJpZ2h0QXJyYXlbal0pIHtcbiAgICAgIHNvcnRlZEFycmF5W2tdID0gcmlnaHRBcnJheVtqXTtcbiAgICAgIGsgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydGVkQXJyYXlba10gPSBsZWZ0QXJyYXlbaV07XG4gICAgICBrICs9IDE7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICB9IHdoaWxlIChpIDwgbGVmdExlbmd0aCAmJiBqIDwgcmlnaHRMZW5ndGgpO1xuXG4gIHdoaWxlIChpIDwgbGVmdExlbmd0aCkge1xuICAgIHNvcnRlZEFycmF5W2tdID0gbGVmdEFycmF5W2ldO1xuICAgIGsgKz0gMTtcbiAgICBpICs9IDE7XG4gIH1cblxuICB3aGlsZSAoaiA8IHJpZ2h0TGVuZ3RoKSB7XG4gICAgc29ydGVkQXJyYXlba10gPSByaWdodEFycmF5W2pdO1xuICAgIGsgKz0gMTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSwgbG93LCBoaWdoKSB7XG5cbiAgaWYgKGxvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG93ID0gMDtcbiAgfVxuXG4gIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcbiAgICBoaWdoID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGlmIChsb3cgPCBoaWdoKSB7XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcblxuICAgIGNvbnN0IGxlZnRBcnJheVRlbXAgPSBtZXJnZVNvcnQoYXJyYXksIGxvdywgbWlkKTtcbiAgICBjb25zdCByaWdodEFycmF5VGVtcCA9IG1lcmdlU29ydChhcnJheSwgbWlkICsgMSwgaGlnaCk7XG5cbiAgICByZXR1cm4gbWVyZ2UobGVmdEFycmF5VGVtcCwgcmlnaHRBcnJheVRlbXAsIGxlZnRBcnJheVRlbXAubGVuZ3RoLCByaWdodEFycmF5VGVtcC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBbYXJyYXlbbG93XV07IC8vIG9uY2UgYXJyYXkgaXMgbGVuZ3RoIDEgcmV0dXJuIHRoZSBhcnJheSBvZiAxIHdoaWNoIGlzIHVzZWQgaW4gdGhlIHJldHVybmVkIG1lcmdlIGZ1bmN0aW9uXG59XG5cbmZ1bmN0aW9uIGRlcHVkZShhcnJheSkge1xuICBjb25zdCBkZWR1cGVBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZGVkdXBlQXJyYXkuaW5jbHVkZXMoYXJyYXlbaV0pKSB7XG4gICAgICAvLyBub3BlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZHVwZUFycmF5LnB1c2goYXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWR1cGVBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQlNUKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShhcnJheVttaWRdKTtcblxuICAgIG5vZGUubGVmdE5vZGUgPSBjcmVhdGVCU1QoYXJyYXksIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0Tm9kZSA9IGNyZWF0ZUJTVChhcnJheSwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBidWlsZFRyZWUoYXJyYXkpIHtcbiAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gIGNvbnN0IGRlZHVwZUFycmF5ID0gZGVwdWRlKGFycmF5KTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBtZXJnZVNvcnQoZGVkdXBlQXJyYXkpO1xuICBjb25zdCBiaW5hcnlTZWFyY2hUcmVlID0gY3JlYXRlQlNUKHNvcnRlZEFycmF5LCAwLCBzb3J0ZWRBcnJheS5sZW5ndGggLSAxKTtcbiAgY29uc29sZS5sb2coc29ydGVkQXJyYXkpO1xuICBjb25zb2xlLmxvZyhiaW5hcnlTZWFyY2hUcmVlKTtcbiAgcmV0dXJuIGJpbmFyeVNlYXJjaFRyZWU7XG59XG5cbmV4cG9ydCB7IG1lcmdlU29ydCwgYnVpbGRUcmVlIH07XG5cblxuXG4vL2JzdFxuXG5cbi8vYmFzZSBjYXNlXG4vLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNvbnN0IGRhbmtUcmVlID0gbmV3IFRyZWUoWzcsIDQsIDMsIDEsIDIsIDksIDYsIDgsIDUsIDEsIDIsIDMsIDQsIDVdKTtcbiAgICBjb25zb2xlLmxvZyhkYW5rVHJlZSk7XG5cblxuXG4gIGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS52YWx1ZX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0Tm9kZSwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBwcmV0dHlQcmludChkYW5rVHJlZS5yb290KTtcblxuICBkYW5rVHJlZS5pbnNlcnQoZGFua1RyZWUucm9vdCwgMTIpO1xuICBkYW5rVHJlZS5pbnNlcnQoZGFua1RyZWUucm9vdCwgMTEpO1xuICBkYW5rVHJlZS5pbnNlcnQoZGFua1RyZWUucm9vdCwgMCk7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxMyk7XG4gIGRhbmtUcmVlLmluc2VydChkYW5rVHJlZS5yb290LCAxNCk7XG5cbiAgY29uc29sZS5sb2coZGFua1RyZWUpO1xuXG4gIHByZXR0eVByaW50KGRhbmtUcmVlLnJvb3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==