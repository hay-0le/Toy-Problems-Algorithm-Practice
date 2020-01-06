/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */

//recursion
//downsides
//upsides
//time complexity
//space complexity



var mergeSort = (arr) => {
    //base case checking if empty or only one element
    if (arr.length <= 1) {
        return arr;
    }
    //split array into two
    //find middle of array
    var mid = Math.floor(arr.length - 1 / 2);

    //create left and right arrays
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    //call helper function with parameters for each array, calling mergeSort recursively
    // --> callsing mergeSort for each side breaks down the arrays until each number is in its own array
    //call merge on example: [2, 4, 1, 6, 3]  --->   [[2], [4], [1], [6], [3]]
    return merge(mergeSort(left), mergeSort(right));
}


var merge = (left, right) => {
    var sortedArray = [];
    var leftIdx = 0;
    var rightIdx = 0;

    //continue while neither index is at end of array
    while (leftIdx !== left.length || rightIdx !== right.length) {

        //check if finished with either side (add final num into sortedArray)
        if (leftIdx === left.length) {
            sortedArray.push(right[rightIdx]);
            rightIdx++;
        } else if (rightIdx === right.length) {
            sortedArray.push(left[leftIdx]);
            leftIdx++;
        } else {
            //if still numbers to check in both arrays, find lowest (compare first two using indexes), push it to sortedArray, increment index
            left[leftIdx] < right[rightIdx] ?
                (sortedArray.push(left[leftIdx]), leftIdx++) :
                (sortedArray.push(right[rightIdx]), rightIdx++);
        }
    }

    //if one array is empty, get all nums from other one (instead of if and else if)
    // var remaining = leftIdx === left.length ? right.slice(rightIdx) : left.slice(leftIdx);
    // return sortedArray.concat(remaining)

    return sortedArray;

}
console.log(mergeSort([4,7,4,3,9,1,2]))



/*
    Time complexity:
        each split is log(n) - logarithmic
        each merge is O(n) -linear
        
        if we merge for every split
        O( log(n) * n ) ---> O( nlog(n) )


*/