/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
//i: string
//o: array of indices
//c: time? space? time limit?
//e: empty string, something other than a string, no repeated letters



var longestRun = function (string) {
    //edge cases -- if input is not a string of an empty string ---> return null
    if (typeof string !== 'string' || string.length <= 1) {
        return null;
    }

    //declare variables start and end, set both to 1 and 0 (holding onto the first two indices)
    let start = 0;
    let end = 1;
    //declare variable largestInterval set it to [0, 0]
    let largestInterval = [0, 0];

    //loop through letters until the end variable is all of the way through the string
    while (end < string.length) {
        //check if the letters at the start and end indices are the same
        if (string[start] === string[end]) {
            //check if current interval is larger than largestInterval
            if (end - start > largestInterval[1] - largestInterval[0]) {
                //if it is, the replace largestInterval with the current one
                largestInterval = [start, end];
            }
            
        } else {
            //set the start equal to  end
            start = end;
        }
        
        //increment end by 1
        end++;
    }
    //return largestInterval
    return largestInterval;
  };
  
  // If you need a random string generator, use this!
  // (you wont need this function for your solution but it may help with testing)
  var randomString = function (len) {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz';
  
    for (var i = 0; i < len; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  };

  console.log(longestRun("abbbcc"))
  console.log(longestRun("aabbc"))
  console.log(longestRun("abcd"))
  console.log(longestRun(""))