/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

//THREE parts of recursion
  //termination condition for bad inputs
  //base case
  //recursion




//////////////////////// OPTION 1 //////////////////////////
var rockPaperScissors = (n = 3) => {
    // TODO: your solution here
  let throws = ["R", "P", "S"];
  let totalOptions = [];

  let rps = (currentThrow = "") => {

    //basecase
    if (currentThrow.length === n) {
      totalOptions.push(currentThrow)
      return;
    }

    for (let i of throws) {
      rps(currentThrow + i);
    }
  }

  rps();
  return totalOptions;
  };
  console.log(rockPaperScissors())




//////////////////////// OPTION 2 //////////////////////////
  let rockPaperScissors = (n = 3) => {
    const throws = ['R', 'P', 'S'];
    const totalOptions = [];

    let rps = (roundsLeft, currentThrow) => {

      if (roundsLeft === 0) {
        totalOptions.push(currentThrow);
        return;
      }

      for (let i = 0; i < throws.length; i++) {
        const current = throws[i];
        rps(roundsLeft - 1, currentThrow + current);
      }
    };

    rps(n, []);
    return totalOptions;
  }

  console.log(rockPaperScissors())



  //////////////////////// OPTION 3 /////////////////////////
  let rockPaperScissors = (rounds = 3, currentThrow = "", totalThrows = []) => {
    let throws = "RPS";

    while (totalThrows.length !== Math.pow(throws.length, rounds) - 1) {

      for (let i of throws) {
        if (currentThrow.length === rounds) {
          totalThrows.push(currentThrow)
          return;

        } else {
          rockPaperScissors(rounds, currentThrow + i, totalThrows);
        }
      }
    }

    return totalThrows;
  }

  console.log(rockPaperScissors(5))