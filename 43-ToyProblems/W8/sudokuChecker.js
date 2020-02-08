/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

/* START SOLUTION */
// Helper function to ensure a given array
// only contains all unique digits 1...9
function hasConflicts(numbers) {
    return (
      // check for only 9 items
      numbers.length !== 9 ||
      // check for a total of 45 (sum of unique digits 1 to 9)
      numbers.reduce((sum, digit) => sum + digit, 0) != 45 ||
      // check that the collection isn't 9 5's (also adds up to 45)
      numbers.indexOf('5') !== numbers.lastIndexOf('5')
    )
  }
  
  // Helper function to convert a string-encoded board
  // into a parseable 2D matrix of numbers
  function convertBoardStringToMatrix(boardString) {
    return boardString.split('\n').map(function(row) {
      return row.split('').map(Number)
    })
  }
  /* END SOLUTION */
  
  function sudokuChecker(board) {
    // Your code here.
    
    
  }