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


// Checks array has all numbers 1 - 9, and no duplicates
function conflictChecker(array) {
    let defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let hasConflict = false;

    for (let num of defaultArray) {
      if (array.indexOf(num) === -1) {
        hasConflict = true;
      }
    }
    return hasConflict;
  }
  
  // Change input string into 2D matrix
  function boardConverter(boardString) {
    return boardString.split('\n').map(function(row) {
      return row.split('').map(Number)
    })
  }

  
  function sudokuChecker(board) {
    
    //convert board to matrix
    board = boardConverter(board);

    //buildStorage for sub squares
    let subSquareStorage = {};

    //set currentKey, to be used to store sub squares in storage
    let currentKey = 0;

    //loop through each row
    for (let [i, row] of board.entries()) {

      //create column array, at the same index as the row (as you check every row, check ever column)
      let column = [];
      for (let r in board) {
        column.push(board[r][i])
      }

      //check for conflicts in row and column
      if (conflictChecker(row) || conflictChecker(column)) {
        return 'invalid';
      }

      //Create subsquares as you iterate through rows, want to keep track of current keys, to continue adding to subsquare for each 3 rows
      //currentkey will reference 1st row of each 3 --( 0, then 3, then 6)
      if (i === 3) {
        currentKey = 3;
      } else if (i === 6) {
        currentKey = 6;
      }

      //add first 3 in current row to first subsquare (at current key)
      subSquareStorage[currentKey] ? subSquareStorage[currentKey].push(row.slice(0, 3)) : subSquareStorage[currentKey] = [row.slice(0, 3)];
      //add second 3 in current row to second subsquare (current key + 1)
      subSquareStorage[currentKey + 1] ? subSquareStorage[currentKey + 1].push(row.slice(3, 6)) : subSquareStorage[currentKey + 1] = [row.slice(3, 6)];
      //add third 3 in current row to third subsquare (current key + 1)
      subSquareStorage[currentKey + 2] ? subSquareStorage[currentKey + 2].push(row.slice(6)) : subSquareStorage[currentKey + 2] = [row.slice(6)];      
    }

    // check each sub square for conflicts ---> subsquare is currently [[1, 2, 3], [4, 5, 6], [7, 8, 9]] --> need to flatten
    for (let key in subSquareStorage) {
      if (conflictChecker(subSquareStorage[key].flat())) return 'invalid';
    }

    
    return 'solved';
  }




//valid solutions
  console.log(sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"))
  // console.log(sudokuChecker("895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241"))
  // console.log(sudokuChecker("795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538"))

//invalid solutions
  // console.log(sudokuChecker("111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999"))
  // console.log(sudokuChecker("215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156"))
  // console.log(sudokuChecker("524698731\n967531824\n381742596\n719325648\n436871952\n258416379\n893154267\n672983415\n145267983"))
