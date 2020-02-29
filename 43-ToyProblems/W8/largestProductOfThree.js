/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

  /////// OPTION 1 ////////
  // sort
  //time complexity: O(n log n)
  var largestProductOfThree = function(array) {
    array.sort((a, b) => {
      return a - b;
    });

    let end = array.length - 1;

    return array[end] * array[end - 1] * array[end - 2];

  };

// /////// OPTION 2 ////////
// // Greedy Approach
// //time complexity O(n)
//   var largestProductOfThree = (arr) => {

//     //set variables for highest, lowest, and high/low product of first two numbers
//     let highest = Math.max(arr[0], arr[1]);
//     let lowest  = Math.min(arr[0], arr[1]);
//     let highestProductOf2 = arr[0] * arr[1];
//     let lowestProductOf2  = arr[0] * arr[1];

//     //set variable for first product of three
//     let highestProductOf3 = arr[0] * arr[1] * arr[2];

//     for (let i=2; i<arr.length; i++) {
//         let current = arr[i];

//         //update highest product of 3 with biggest number between current highest product of 3, 
//         //then the products of adding the current number to high/low product of 2
//         highestProductOf3 = Math.max(
//             highestProductOf3,
//             current * highestProductOf2,
//             current * lowestProductOf2
//         );
        
//         //update highest product of 2
//         highestProductOf2 = Math.max(
//             highestProductOf2,
//             current * highest,
//             current * lowest
//         );
        
//         //update lowest product of 2
//         lowestProductOf2 = Math.min(
//             lowestProductOf2,
//             current * highest,
//             current * lowest
//         );
        
//         //update current highest and current lowest
//         highest = Math.max(highest, current);
//         lowest = Math.min(lowest, current);
//     }

//     return highestProductOf3;
 
//   };



  console.log(largestProductOfThree([2, 1, 3, 7]))