/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// /////////////////////////// OPTION 1 /////////////////////////////////
// return every anagram - WITH REPEATS
  var allAnagrams = (string) => {
    var anagrams = [];

    var spell = (currentAnagram = "") => {

      //base case, check if currentAnagram length is equal to string length
      if (currentAnagram.length === string.length) {
        anagrams.push(currentAnagram);
        return;
      }

      //loop through each letter of string, adding it to currentAnagram then invoking recursion function
      for (let letter of string) {
        spell(currentAnagram + letter)
      }
    }

    spell();
    return anagrams;
    
  }






  /////////////////////////// OPTION 2 /////////////////////////////////
// avoid duplicates

var allAnagrams = (string) => {
  //object instead of array to allow for constant time lookup when checking for duplicates
  var anagrams = {};

  var spell = (currentAnagram = "") => {

    //base case, check if currentAnagram length is equal to string length
    if (currentAnagram.length === string.length) {
      //if already exists it will just "update" it (this filters out doubles)
      anagrams[currentAnagram] = true;
      return;
    }

    for (let letter of string) {
      spell(currentAnagram + letter)
    }
  }

  spell();

  // get all anagrams from object storage
  return Object.keys(anagrams)

  
}

  console.log(allAnagrams('abc'))