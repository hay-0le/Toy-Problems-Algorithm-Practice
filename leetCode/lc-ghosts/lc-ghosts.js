//input: ghosts = array of coordinates for ghosts (up to 100), and a target array with once coordinate in
//output: boolean, whether or not the player can get to the target before all of the ghosts.

let game = (ghosts, target) => {

  let findGhostDistance = (coordinates) => {
    let targetX = target[0];
    let targetY = target[1];

    let ghostX = coordinates[0] > targetX ? coordinates[0] - targetX : targetX - coordinates[0];
    let ghostY = coordinates[1] > targetY ? coordinates[1] - targetY : targetY - coordinates[1];

    return ghostX + ghostY
  }

  let heroDistance = Math.abs(target[0]) + Math.abs(target[1]);

  for (let ghost in ghosts) {
    if (findGhostDistance(ghosts[ghost]) <= heroDistance) return false;
  }

  return true;
}


// ghosts = [[1, 0], [0, 3]]
// target = [0, 1]
// Output: true

// ghosts = [[1, 0], [0, 3]]
// target = [0, 1]
// Output: true

ghosts = [[1,9],[2,-5],[3,8],[9,8],[-1,3]]
[8,-10]
// Output: false

console.log(game(ghosts, target))

