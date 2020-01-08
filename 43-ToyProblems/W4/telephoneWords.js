/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

 var phoneDigitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  };
  
  
  var telephoneWords = (digitString) => {
    var results = [];
    var limit = 4;

    //create strings for each of group of letters from corresponding digit
    var firstLetters = phoneDigitsToLetters[digitString[0]];
    var secondLetters = phoneDigitsToLetters[digitString[1]];
    var thirdLetters = phoneDigitsToLetters[digitString[2]];
    var fourthLetters = phoneDigitsToLetters[digitString[3]];
    

    //recursion function
    var spell = (currentWord = '') => {

        //basecase --> check length
        if (currentWord.length === 4) {
            results.push(currentWord);
            return;
        }

        //check which numbers to loop through depending on length of currentWord
        if (currentWord.length === 0) {
            //loop through firstLetters
            for (var letter of firstLetters) {
                spell(currentWord + letter);
            }
        } else if (currentWord.length === 1) {
            //loop through secondLetters
            for (var letter of secondLetters) {
                spell(currentWord + letter);
            }
        } else if (currentWord.length === 2) {
            //loop thorugh thirdLetters
            for (var letter of thirdLetters) {
                spell(currentWord + letter);
            }
        } else if (currentWord.length === 3) {
            //loop through fourthLetters
            for (var letter of fourthLetters) {
                spell(currentWord + letter);
            }
        }
    }

    spell();
    return results;
  }

  console.log(telephoneWords('2456'))