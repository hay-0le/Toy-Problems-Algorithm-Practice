/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  let islandCount = 0;
  let islandMap = mapStr.split('\n').map(row => row.split(''));

  let deleteIsland = (r, c) => {
    //switch coordinate to water
    islandMap[r][c] = '.';

    //check all surrounding spots for land

    //check above
    if (islandMap[r - 1] && islandMap[r - 1] === '0') {
      deleteIsland(r - 1, c);
    }

    //check below
    if (islandMap[r + 1] && islandMap[r + 1][c] === '0') {
      deleteIsland(r + 1, c);
    }

    //check left
    if (islandMap[r][c - 1] && islandMap[r][c - 1] === '0') {
      deleteIsland(r, c - 1);
    }

    //check right
    if (islandMap[r][c + 1] && islandMap[r][c + 1] === '0') {
      deleteIsland(r, c + 1);
    }
  }


  for (let i = 0; i < islandMap.length; i++) {
    for (let j = 0; j < islandMap.length; j++) {
      if (islandMap[i][j] === '0') {
        islandCount++;
        deleteIsland(i, j);
      }
    }
  }

  return islandCount;
    
}

console.log(countIslands(`
..00
...0
..0.
.0..`))