/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  };
  


  //With split number up into groups of three
  //With the 10's place index 0 and gets bigger from there
  // 35 676 076 --> [76, 676, 35]
  let chunkIt = (num) =>  {
      let chunksByThousand = [];

      while (num > 0) {
          chunksByThousand.push(num % 1000);
          num = Math.floor(num / 1000);
      }
      return chunksByThousand;
  }



  //changes numbers 0-999 to english
  let makeMeEnglish = (num) => {
      //set variable result to empty string
    let result = '';

    while (num > 0) {
       
        //if num is less than 20
        if (num < 20) {
            let digit = numbersToWords[num];

            if (num < 20 && result[result.length - 1] !== "-") {
                result += " ";
            }
            
            result += digit;
            num -= num;

        //if number divisible by 100
        } else if (num / 100 > 1) {
            let digit = Math.floor(num / 100);
            result = numbersToWords[digit] + ' hundred';
            num -= digit * 100;
            
        //if num divisible by 10
        } else if (num / 10 > 0) {
            let digit = Math.floor(num / 10);
            result += " " + numbersToWords[digit * 10];

            if (!numbersToWords[num]) {
                result += "-";
            }
            num -= digit * 10;
        }
    }

    return result;
  }


  //three hundred forty-two, 1000  ---> three hundred forty-two thousand
  let multiplierByPlace = (numInEnglish, placeToMultiply) => {
    //if placeToMultiply is 1 (meaning its the first three numbers and is less than 1000) leave it alone
    if (placeToMultiply === 1) {
        return numInEnglish;
    } else {
        return numInEnglish + " " + numbersToPlace[placeToMultiply] + " ";
    }
  }

  

Number.prototype.toEnglish = function () {
    //if less than 20 return number in english
    if (this <= 20) {
        return numbersToWords[this];
    }

    //set variable result to empty string
    let result = '';
    //set variable chunkWords to empty array (will hold each chunk changed from num to words)
    let chunkWords = [];
    //set variable chunks to this number passed into chunkIt to get an array of the number split into groups of 3
    let chunks = chunkIt(this);
    //set variable multiplier to 10 to start
    let multiplier = 1;

    //for each chunk
    for (let chunk of chunks) {
        //set variable numWord to chunk (number) in english using makeMeEnglish()
        let numWord = makeMeEnglish(chunk);
        //set variable multipliedNumWord to numWord passed into multiplyByPlace with multiplier
        let multipliedNumWord = multiplierByPlace(numWord, multiplier)
        //set result to multipliedNumToWord plus result
        result = multipliedNumWord + result;
        //set multiplier to multiplier x1000
        multiplier *= 1000;
        
    }
   
    return result;
  };

    
console.log((0).toEnglish())
console.log((78193512).toEnglish())
console.log((575).toEnglish())


// console.log(chunkIt(35676000))
// console.log(chunkIt(35676980))

// console.log("193:", makeMeEnglish(193))
// console.log("909", makeMeEnglish(909))
// console.log("99", makeMeEnglish(99))
// console.log("9", makeMeEnglish(9))

// console.log(multiplier("ninety-nine", 10))
// console.log(multiplier("ninety-nine", 1000))
// console.log(multiplier("ninety-nine", 1000000))
