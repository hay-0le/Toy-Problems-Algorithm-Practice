/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, start = 0, end = array.length - 1) {

    if (start === end || target < array[start] || target > array[end]) {
        return null;
    }
    //find middle index of array
    var middle = Math.floor((start + end) / 2);
    
    //if array at middle is equal to target
    if (array[middle] === target) {
        //return middle
        return middle;
        //else if target is smaller than array at middle
    } else if (array[middle] > target) {
        //binary search with left side of array and target
        return binarySearch(array, target, 0, middle - 1);
        //else 
    } else {
        //binary search with right side of array and target
        return binarySearch(array, target, middle + 1, end)
    }

};

console.log(binarySearch([1, 2, 3, 4, 5], 1))