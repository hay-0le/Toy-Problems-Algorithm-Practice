/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

//i: matrix
//o: array of numbers
//e: an element is something other than a number, arrays aren't same length
//c:

var spiralTraversal = function(matrix) {
    //results array
    let results = [];

    //variable currentDirection set to right
    let currentDirection = 'right';

    //edges:
    //var top set to zero
    let topIdx = 0;
    //var right set to length of first row - 1
    let rightIdx = 1;
    //var bottom set to length of matrix - 1
    let bottomIdx = 1;
    //var left set to 0
    let leftIdx = 0;

    //
    do {

        //if direction is right
        if (currentDirection === 'right') {
            //loop through row at top, from left to right
            for (let i = leftIdx; i <= matrix[topIdx].length - rightIdx; i++) {
                //push element to results
                results.push(matrix[topIdx][i])
            }
                //change direction to down
                currentDirection = 'down';
                //increment top
                topIdx++;
        }
        
        //if direction is down
        if (currentDirection === 'down') {
            //loop through matrix from top to bottom, pushing element at right to results
            for (let i = topIdx; i <= matrix.length - bottomIdx; i++) {
                //push element to results
                results.push(matrix[i][matrix[i].length - rightIdx]);
            }
            //change direction to left
            currentDirection ='left';
            //increment right
            rightIdx++;
            
        }

        //if direction is left
        if (currentDirection === 'left') {
            //loop through row at bottom, starting from right to left
            for (let i = matrix[matrix.length - bottomIdx].length - rightIdx; i >= leftIdx; i--) {
                //push element to results
                results.push(matrix[matrix.length - bottomIdx][i]);
            }
            //change direction to up
            currentDirection = 'up';
            //decrement bottom
            bottomIdx++;
        }
        
        //if direction is up
        if (currentDirection === 'up') {
            //loop through matrix from bottom to top, pushing left index to results
            for (let i = matrix.length - bottomIdx; i >= topIdx; i--) {
                //push element to results
                results.push(matrix[i][leftIdx]);
            }
            //change direction to right
            currentDirection = 'right';
            //increment left
            leftIdx++;
            
        }
        
    } while (leftIdx <= matrix[topIdx].length - rightIdx && topIdx <= matrix.length - bottomIdx)
        
    //return results
    return results;
        
    };

    console.log(spiralTraversal([
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]));

    console.log(spiralTraversal([
        [ 1, 2, 3],
        [ 4, 5, 6],
        [ 7, 8, 9],
        [ 10, 11, 12],
        [ 13, 14, 15],
        [ 16, 17, 18],
        [ 19, 20, 21],
        [ 22, 23, 24]
      ]));
      
    console.log(spiralTraversal([
        [ 1, 2, 3, 4, 5, 6, 7],
        [ 6, 7, 8, 9, 10, 11, 12],
        [ 13, 14, 15, 16, 17, 18, 19]
      ]));