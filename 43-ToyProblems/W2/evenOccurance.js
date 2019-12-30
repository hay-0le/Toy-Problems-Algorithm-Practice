/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/



/////////////////////// OPTION 1 /////////////////////////
// object lookup, double loop (time complexity: O(n^2), quadratic )

var evenOccurrence = function(arr) {
  // Your code here.
  let occurrences = {};

  //populate object
  for (let num of arr) {
    occurrences[num] ? occurrences[num]++ : occurrences[num] = 1;
  }

  //loop through again and check if even occurence
  for (let n of arr) {
    if (occurrences[n] % 2 === 0) {
      return n;
    }
  }

  //return null if no even occurences
  return null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 4]))




// ////////////////////// OPTION 2 ///////////////////////
// splice + .indexOf()

var evenOccurrence = (arr) =>  {
  // Time complexity: best case O(n^2) worst case: terrible O(n^)

  //copy of given array, to delete occurences from, as to not interupt for loop
  let copyArray = arr.slice();

  //Loop through each number in arr
  for (let num of arr) {
    let occurrences = 0;

    //loop through, removing all occurences, incrementing occurences variable, and deleting, until all occurences of num are removed
    while (copyArray.indexOf(num) !== -1) {
      occurrences++;
      let index = copyArray.indexOf(num);
      copyArray.splice(index, 1);
    }
    //after removed all occurences of num, check if it occurred an even number of times
    if (occurrences % 2 === 0) return num;
  }
  //if no even occurences
  return null;
};
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 4, 4]))




// ////////////////////// OPTION 3 ///////////////////////
//recursion + object lookup? ( if you extra )

var evenOccurrence = (arr) => {
  let copyArray = arr.slice();

  let occurenceCheck = (num, copyArray, occurences = 0) => {
    //base case
    if (copyArray.indexOf(num) === -1) {
      return occurences;
    } else {
      copyArray.splice(copyArray.indexOf(num), 1);
      return occurenceCheck(num, copyArray, ++occurences);
    }
  }

  for (let num of arr) {
    console.log("arr", arr)
    if (occurenceCheck(num, copyArray) % 2 === 0) return num;
  }

  return null;
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 1]))



///////////////////////// OPTION 4 ////////////////////////
//regex?
let evenOccurrence = (arr) => {
  let arrString = "," + arr.join(',') + ",";

  for (let num of arr) {
    let re = new RegExp("," + num + ",", "g");

    if (arrString.match(re).length % 2 === 0) return num;
  }

  return null
}

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 4, 6]))