// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */

var searchMatrix = function(matrix, target) {
  var targetExists = false;
  //checks if there is only one row left to search. If so runs rowCheck helper function, if not cuts edges in half and finds new middle
  var cut = (start, end) => {
    if (start === end) {
      rowCheck(matrix[start]);
    } else if (end - start === 1) {
      matrix[end][0] > target ? rowCheck(matrix[start]) : rowCheck(matrix[end]);
    } else {
      findEdges(end - Math.floor((end - start) / 2), start, end);
    }
  }
  //binary searches row for target
  var rowCheck = (row) => {
    let rowStart = 0;
    let rowEnd = row.length - 1;
    if (rowStart === rowEnd) {
      if (row[rowStart] === target) targetExists= true;
    } else {
      while (rowStart <= rowEnd) {
        let rowCenter = Math.floor(rowEnd - rowStart / 2) ? Math.floor(rowEnd - rowStart / 2) :  0;
          if (row[rowCenter] === target) {
            targetExists = true;
            break;
          }
          row[rowCenter] > target ? rowEnd = rowCenter - 1 : rowStart = rowCenter + 1;
      }
    }
  }
  //edge cases
  if (matrix.length < 1 || matrix[0].length < 1) return false;
  if (matrix.length === 1) {
      rowCheck(matrix[0]);
      return targetExists;
  }
  //finds edges to create 'window' to search between by determining if target is larger or smaller than center of that window
  var findEdges = (c, s, e) => {
    matrix[c][0] > target ? end = c - 1 : start = c;
    cut(start, end);
 }

  var start = 0;
  var end = matrix.length - 1;
  var center = Math.floor(matrix.length / 2);

  findEdges(center, start, end);
  return targetExists;
};


console.time("2d matrix search")
searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3)
console.timeEnd("2d matrix search")

// console.log(searchMatrix([[-10],[-7],[-5],[-4],[-2]], 1))

// console.log(searchMatrix([
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 13))

// console.log(searchMatrix([
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ], 3))

//   console.log(searchMatrix([[1]], 0))