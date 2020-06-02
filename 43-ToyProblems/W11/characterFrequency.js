/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

////// OPTION 1 ///////
//Brute-ish force
var characterFrequency = function(string) {
    //declare storage object
    let storage = {};

    //loop through letters
    for (let letter of string) {
        //if letter is in storage
        if (storage[letter]) {
            //increment that key's count
            storage[letter]++;
        } else {
            //add letter to object with value as 1
            storage[letter] = 1;
        }
    }

    //declare variable frequencyArray as empty array to push each key:value pair into
    let frequencyArray = [];
    //get object keys, and for each key, push key and that keys value, in its own array, into the frequencyArray
    Object.keys(storage).forEach((letter) =>{
        frequencyArray.push([letter, storage[letter]])
    })
    //return frequencyArray sorted by the counts
    return frequencyArray.sort((a, b) => b[1] - a[1]);
};
  

///////// OPTION 2 ////////
//Higher order functions 
//Like... the same thing as the first one but it looks more complicated now
var characterFrequency = function(string) {
    //create object of each letter and its frequency count
    let characterCounts = [...string].reduce((counts, letter) => {
        counts[letter] ? counts[letter]++ : counts[letter] = 1;
        return counts;
    }, {});

    //take all entries from the characterCount object and put them into an array, then sort them by frequency
    return Object.entries(characterCounts).sort((a, b) => b[1] - a[1]);

};

console.log(characterFrequency('mississippi')) 
// [
//     *    ['i', 4],
//     *    ['s', 4],
//     *    ['p', 2],
//     *    ['m', 1]
//     *  ]
console.log(characterFrequency('miaaiaaippi'))
//  [
//  *    ['a', 4],
//  *    ['i', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]
console.log(characterFrequency('mmmaaaiiibbb'))
// [
//     *    ['a', 3],
//     *    ['b', 3],
//     *    ['i', 3],
//     *    ['m', 3]
//     *  ]