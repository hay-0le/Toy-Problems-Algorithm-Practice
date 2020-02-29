/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of array) {
        //add num to currentSum then check to see if currentSum or maxSum is larger
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);

        //if sum ever goes below zero, reset at 0
        if (currentSum < 0 ) currentSum = 0;
    }
    return maxSum;

};

console.log(sumArray([1, 2, 3])); // => 6
console.log(sumArray([1, 2, 3, -4])); // 6
console.log(sumArray([1, 2, 3, -4, 5])); // 7
console.log(sumArray([4, -1, 5])); // => 8
console.log(sumArray([10, -11, 11])); // 11
console.log(sumArray([10, -1, ])); // 11
