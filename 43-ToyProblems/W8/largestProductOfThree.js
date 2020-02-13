/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

/* START SOLUTION */
// Create a convenience function that sorts arrays ascending numerically
Array.prototype.sortAscending = function() {
    this.sort(function(a, b) {
      return a - b;
    });
    return this;
  };
  /* END SOLUTION */
  

  /////// OPTION 1 ////////
  // var largestProductOfThree = function(array) {
  //   array.sortAscending();
  //   let end = array.length - 1;

  //   return array[end] * array[end - 1] * array[end - 2];

  // };

/////// OPTION 2 ////////
//Recursion
  var largestProductOfThree = (array) => {
    let numOfNumbers = 3;
    let largestProduct;
    
    if (array.length < numOfNumbers) return null;

    let findLargestProduct = (numsLeftToMultiply, currentProduct = undefined, arrayIdx = 0) => {
      if (numsLeftToMultiply === 0) {
        // console.log(currentProduct)
        // largestProduct = currentProduct > largestProduct ? currentProduct : largestProduct;
        return;
      }

      for (let i = arrayIdx; i < array.length; i++) {
        let num = array[arrayIdx];
        // console.log("num", num)
        currentProduct = currentProduct ? currentProduct * num : num; 
        console.log("currentProduct", currentProduct)
        findLargestProduct(numsLeftToMultiply - 1, currentProduct, arrayIdx + 1);
      }
    }
    findLargestProduct(numOfNumbers);
    return largestProduct;
 
  };
  console.log(largestProductOfThree([2, 1, 3, 7]))