/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.
 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */

  ///////////////////// OPTION 1 //////////////////////////
  //Array
//  var Stack = function() {
//    let stack = [];
//    let minValues = [];

//   // add an item to the top of the stack
//     this.push = function(value) {
//       if (!minValues.length || value <= minValues[minValues.length - 1]) {
//         minValues.push(value);
//       }
//       stack.push(value);
//     };

//   // remove an item from the top of the stack
//     this.pop = function() {
//       let removedValue = stack.pop();

//       if (removedValue === minValues[minValues.length - 1]) {
//         minValues.pop();
//       }
//       return removedValue;
//     };

//   // return the number of items in the stack
//     this.size = function() {
//       return stack.length;
//     };

//   // return the minimum value in the stack
//     this.min = function() {
//       return minValues[minValues.length - 1];

//     };

//   };

// var example = new Stack();
// example.push(4);
// example.push(3);
// example.push(3);
// example.push(2);
// example.push(2);
// example.push(2);
// example.pop();
// console.log("min: ", example.min())
// console.log("size: ", example.size())
// console.log("pop: ", example.pop())




//     ///////////////////// OPTION 1 //////////////////////////
//     //Object
 var Stack = function() {
   let stack = {};
   //used as index for last value in array
   let size = 0;

   //hold the keys for each "lowest" value pushed in
   let minValueKeys = [];

  // add an item to the top of the stack
    this.push = function(value) {
      //key for current minimum value
      let minKey = minValueKeys[minValueKeys.length - 1];

      //check if value is less than the current minimum value or if this is the first inserted value
      if (value < stack[minKey] || !minValueKeys.length) {
        minValueKeys.push(size);
      }

      stack[size] = value;
      size++;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      let minKey = minValueKeys[minValueKeys.length - 1];
      if (size === minKey) {
        minValueKeys.pop();
      }
      let removedValue = stack[size];
      delete stack[size];
      size--;

      return removedValue;

    };

  // return the number of items in the stack
    this.size = function() {
      return size;
    };

  // return the minimum value in the stack
    this.min = function() {
      let minKey = minValueKeys[minValueKeys.length - 1];
      return stack[minKey];
    };

  };

var example = new Stack();
example.push(4);
example.push(3);
example.push(3);
example.push(2);
example.push(2);
example.push(2);
example.pop();
console.log("min: ", example.min())
console.log("size: ", example.size())
console.log("pop: ", example.pop())
