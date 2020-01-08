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
        if (string.indexOf(letter) === i && string.indexOf(letter, i + 1) == -1) return letter;
    }
    return null;
}

///////////////////////// OPTION 2 //////////////////////
//    make temp copy of string, split it to an array, 
//      slice out letter at current index, then check indexOf on rest of temp
var firstNonRepeatedCharacter = function(string) {
    for (var i = 0; i < string.length; i++) {
        var tempString = string.split("");
        var letter = string[i];

        tempString.splice(i, 1)
        if (tempString.indexOf(letter) === -1) return letter;
    }
    return null;
}


console.log(firstNonRepeatedCharacter("AA"))