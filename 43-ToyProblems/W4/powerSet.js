/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = (str) => {
    //create variable results to hold all possible combos, add empty str
    var results = [];

    //edge case empty input str
    if (str.length < 1) return results;

    //remove duplicates 
    str = str.split("").filter((letter, i) => str.indexOf(letter) === i)

    //recursion function with currentStr = '' and index = 0 as parameters
    var spell = (currentStr = '', index = 0) => {

        //basecase --> if currentString is same length as str
        if (currentStr.length === str.length) {
            //return;
            return;
        }
            
        //loop through each letter in str starting at index from parameter
        for (var i = index; i < str.length; i++) {
            if (results.length === 0) results.push('');
            //add currentString + current letter to results
            results.push(currentStr + str[i]);
            //invoke spell with currentStr + current letter and increment i (to keep from adding same letter twice)
            spell(currentStr + str[i], i + 1)
        }
    }    
        
    spell();    
    return results;
}

console.log(powerSet('jumjp'))


