// **
//  * Insertion sort is a basic sorting algorithm.
//  *
//  * Insertion sort iterates over an array, growing a sorted array behind the current location.
//  * It takes each element from the input and finds the spot, up to the current point,
//  * where that element belongs. It does this until it gets to the end of the array.
//  *
//  * Insertion sort should be implemented as a stable sort. This means that equal elements
//  * should retain their relative order. Numbers, as primitives, give us no way to check this,
//  * so we'll be sorting objects with a value field, on which they will be sorted, like so:
//  *
//  * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
//  *
//  * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
//  *
//  * ---
//  *
//  * EXTRA CREDIT:
//  *
//  * Refactor your sort to (optionally) take an explicit comparator function
//  * as its second argument, so that callers can define arbitrary ways to sort elements.
//  * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
//  * for an example of how this works (excerpt below):
//  *
//  * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
//  * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
//  * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
//  *
//  * If no comparator is given, just sort the elements using `<` or `>`.
//  **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
    var transform = [];
  
    for (var i = 0; i < array.length; i++) {
      transform.push({value: array[i], i: i});
    }
  
    return transform;
  };
  


//time complexity:
  //worst case: O(n ^2)   since we have two loops
  //best case: O(n)   its already sorted




  

/////////////////// OPTION 1 /////////////////
//use splice and compare function ( extra credit - optional )

var insertionSort = (arr, compareFunc) => {
  //if no compare function given, set it to return if a is bigger than b
  if (!compareFunc) {
      compareFunc = (a, b) => {return a > b}
  }

  //outer function to loop through array
  for (var i = 0; i < arr.length; i++) {
    //variables for current number, and index for next number
    var currentObj = arr[i];
    var nextIndex = i + 1;

    //check if there is a number to right right of the current one and then use helper function, keep running while current is bigger
    while (arr[nextIndex] && compareFunc(currentObj.value, arr[nextIndex].value)) {
      //increment next number to check against
      nextIndex++;
    }

    //once you find where current should be placed, splice it into that index
    arr.splice((nextIndex), 0, currentObj);
    //then remove it from its previous one
    arr.splice(i, 1);
  }
  
  return arr;
  }









  ///////////////////////// OPTION 2 //////////////////////////
  //use hole instead of splice (splice is inefficient and adds to time complexity)

  var insertionSort = function(array) {

    //loop through array
    for (var i = 1; i < array.length; i++) {

      //grab current num object
      var val = array[i];
      //set hole to currents index
      var hole = i;

      //as long as hole is not beginning of array and current value is less than its neighbor to the left
      while (hole > 0 && val.value < array[hole - 1].value) {

        //move the "hole" over to the left
        array[hole] = array[hole - 1];

        //move "hole" index to the left
        hole -= 1;
      }

      //once current is bigger than its left neighbor, place it in the created hole
      array[hole] = val;
    }
    return array;
  }




  console.log(insertionSort([{value: 2}, {value: 1}, {value: 3}]))
  //yields [{value: 1}, {value: 2}, {value: 3}]