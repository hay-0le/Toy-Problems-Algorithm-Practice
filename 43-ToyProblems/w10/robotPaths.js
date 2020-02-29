/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
    var board = [];
    for (var i = 0; i < n; i++) {
      board.push([]);
      for (var j = 0; j < n; j++) {
        board[i].push(false);
      }
    }
    board.togglePiece = function(i, j) {
      this[i][j] = !this[i][j];
    };
    board.hasBeenVisited = function(i, j) {
      return !!this[i][j];
    };
    return board;
  };
  
var robotPaths = function(n, board, i = 0, j = 0) {
  let numOfPaths = 0;
  board = board || makeBoard(n);

  //recurs func findPaths with current coordinates as arguments
  let findPaths = (x, y) => {
    //toggle
    board.togglePiece(x, y);
    
    //if coordinates are final destination -- base case
    if (x === n - 1 && y === n - 1) {
      //increment numofPaths
      numOfPaths++;
      //untoggle current place
      board.togglePiece(x, y);
      //return
      return;
    
    }
    
    
    //check right -- if still on board, and has not been visited
    if (y + 1 < n && !board.hasBeenVisited(x, y + 1)) {
      //invoke findpath on space to the right
      findPaths(x, y + 1);
    }
    
    //check left -- if still on board, and has not been visited
    if (y - 1 >= 0 && !board.hasBeenVisited(x, y - 1)) {
      //invoke findpath on space to the left
      findPaths(x, y - 1);
    }
    
      //check up -- if still on board, and has not been visited
      if (x - 1 >= 0 && !board.hasBeenVisited(x - 1, y)) {
        //invoke findpath on space above
      findPaths(x - 1, y);
      }
    
    //check down-- if still on board, and has not been visited
    if (x + 1 < n && !board.hasBeenVisited(x + 1, y)) {
      //invoke findpath on space below
      findPaths(x + 1, y);
    }


    //untoggle current place
    board.togglePiece(x, y);
  }

  //invoke recursive function with 0,0 coordinates
  findPaths(i, j);
  return numOfPaths;
};





/////////// OPTION 2 ////////////
// var robotPaths = function(n, board, i = 0, j = 0) {
//   board = board || makeBoard(n);
 
//   // No possible paths if you’re off the board
//   // or on a piece you shouldn’t be on
//   if (!(i >= 0 && i < n && j >= 0 && j < n) ||
//       board.hasBeenVisited(i, j)) {
//     return 0;
//   }
//   // One possible path if you’re at the
//   // end point (the path that led there)
//   if (i === n - 1 && j === n - 1) return 1;
//   board.togglePiece(i, j);

//   //add number of paths to destination for moving piece up + down + left + right
//   var result = robotPaths(n, board, i + 1, j) +  robotPaths(n, board, i - 1, j) + robotPaths(n, board, i, j - 1) + robotPaths(n, board, i, j + 1) ;
 
//   board.togglePiece(i, j);
//   return result;

// };

console.log(robotPaths(4))