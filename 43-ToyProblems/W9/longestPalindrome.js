/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

//expand recursively
var expand = function (str, start, end) {
    //decrement start and incremend end
    start--;
    end++;

    //if start is less than 0, or end is greater than last index or elements at start and end indexes in string are not equal
    if (start < 0 || end >= str.length || str[start] !== str[end]) {
        //return string from previous start and end indexes
        return str.slice(start + 1, end);
    }

    //recurse expand with start and end
    return expand(str, start, end);
};


var longestPalindrome = function (string) {
    string = string.toLowerCase();
    let longest = '';

    if (string.length <= 1 || !string) return string;

    //loop through string
    for (let i = 0; i < string.length; i++) {
        //if current letter and next letter are the same
        if (string[i] === string[i + 1]) {
            //set variable temp to expand, with start as current index, and end as current index + 1
            let temp = expand(string, i, i + 1);
            //set longest string either temp or longest, depending on which is longer
            longest = longest.length > temp.length ? longest : temp;
        }
        
        //set variable temp to expand with start and end current index
        let temp = expand(string, i, i);   
        //set longest string either temp or longest, depending on which is longer
        longest = longest.length > temp.length ? longest : temp;
    }
    return longest;
};

console.log(longestPalindrome("My dad is a racecar athlete"))
console.log(longestPalindrome("abba"))
console.log(longestPalindrome("bananas"))