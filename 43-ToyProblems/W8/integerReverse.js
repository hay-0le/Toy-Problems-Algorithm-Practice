/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
    // TODO: Implement this function!
    let numStorage = {};
    let reversedNum = 0;
    let divisor = 10;
    let multiplier;
    let i = 1;

    if (number < 10) return number;

    while (number > 10) {
      if (number / divisor > 10) {
        divisor *= 10;
      } else {
        //if multiplier is undefined, and we are in the else block, we have found the max divisor, so set multiplier to be used later
        multiplier = multiplier === undefined ? divisor : multiplier;

        //How many times does divisor go into number
        let timesDivisorFits = Math.floor(number / divisor);
        //save i as key, and timesDivisorFits as value to later by multiplied back together
        numStorage[i] = timesDivisorFits;
        //subtract amount from number
        number -= divisor * timesDivisorFits;
        //descrease divisor by 10th
        divisor = divisor / 10;
        i++;
      }
    }
    //add final digit (single, less than 10) to storage
    numStorage[i] = number;

    //storage object for 235 should look like:
    // { 1: 2, 2: 3, 1: 5}

    //get keys, reverse the order
    let reversedKeys = Object.keys(numStorage).sort().reverse();

    //loop through keys
    for (let key of reversedKeys) {
      let valueMultiplied = multiplier * numStorage[key];
      reversedNum = reversedNum + valueMultiplied;
      multiplier = multiplier / 10;
      
    }
      //value at key in storage * multiplier
    return reversedNum;
  }

  console.log(reverseInteger(12345))