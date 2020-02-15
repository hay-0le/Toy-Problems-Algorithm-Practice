/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  var translateRomanNumeral = function(romanNumeral) {
    let total = 0;
    let i = 0;

    //loop through roman numerals
    while (i < romanNumeral.length) {

      //since you determine to add of subtract numerals based off whats in front of behind, we check every two together
      let currentNumeral = DIGIT_VALUES[romanNumeral[i]];
      let nextNumeral = DIGIT_VALUES[romanNumeral[i + 1]];

      //if the first of the two is smaller than the second, then we subtract the first from the second then add to total 
      if (romanNumeral[i + 1] !== undefined && currentNumeral < nextNumeral) {
        total += nextNumeral - currentNumeral;
        i += 2;

        //as long as the second numeral in the pair exists then the first has to be larger than the second, so add them then add to total 
      } else if (romanNumeral[i + 1] !== undefined) {
        total += currentNumeral + nextNumeral;
        i += 2;
      } else {
        //if last numberal
        total += currentNumeral;
        i++;
      }
    }

    return total;
  }

  console.log(translateRomanNumeral('I'))