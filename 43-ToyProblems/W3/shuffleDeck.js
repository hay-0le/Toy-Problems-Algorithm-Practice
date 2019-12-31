/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = (array) => {
    var current, next, currentIdx, nextIdx;
    var swapped = false;

    for (var i = 0; i < array.length; i++) {
        current = array[i];
        currentIdx = i;
        next = array[i + 1];
        nextIdx = i + 1;

        if (current > next) {
            array[currentIdx] = next;
            array[nextIdx] = current;
            swapped = true;
        }
    }
    
    swapped ? bubbleSort(array) : return array;



}





























// var bubbleSort = function(array) {
//     // Your code here.
//    var swapped = false;
//     //loop over each index
//     for (var i = 0; i < array.length; i++) {
//       //define variables to hold index and the next index
  
//       var currentIdx = i;
//       var nextIdx = currentIdx + 1;
//       //while the number at that index is greater than the one after it
//       while (array[currentIdx] > array[nextIdx] && currentIdx < array.length) {
  
//         var smallHolder = array[currentIdx];
//         array[currentIdx] = array[nextIdx];
//         array[nextIdx] = smallHolder;
//         currentIdx++;
//         swapped = true;
//       }
//       //swap/move larger to right
//     }
  
//     if (swapped === true) {
//       bubbleSort(array);
//     }
//     return array;
  
//     //return sorted array
//   };
