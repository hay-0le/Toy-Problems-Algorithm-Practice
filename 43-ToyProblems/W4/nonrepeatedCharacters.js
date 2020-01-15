/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */



 ///////////////////////// OPTION 1 //////////////////////
 //     check first occurance of letter, and check if it occurs anywhere after
var firstNonRepeatedCharacter = function(string) {

    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        //check if this is first occurance of that letter && check if there is no occurances after (i + 1)
        if (string.indexOf(letter) === i && string.indexOf(letter, i + 1) == -1) return letter;
    }
    return null;
}



///////////////////////// OPTION 2 //////////////////////
//    make temp copy of string, split it to an array, 
//      slice out letter at current index, then check indexOf on rest of temp

var firstNonRepeatedCharacter = function(string) {
    
    for (var i = 0; i < string.length; i++) {
        //split into an array
        var tempArray = string.split("");
        var letter = string[i];
        //remove current letter out of tempArray
        tempArray.splice(i, 1)
        //see if indexOf can find another occurance of letter, if not then it was the only one
        if (tempArray.indexOf(letter) === -1) return letter;
    }
    return null;
}


console.log(firstNonRepeatedCharacter("AA"))