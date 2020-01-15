// groupBy takes an array and splits it into sets, grouped by the 
// result of running each value through the predicate. If the 
// predicate is a string instead of a function, it groups by the 
// property named by predicate on each of the values.


function groupBy(collection, predicate){ 
    //create storage object
    var storage = {};

    //loop through each element in collection
    for (var i = 0; i < collection.length; i++) {
        var key;

        if (typeof predicate === 'function') {
            key = predicate(collection[i])

        } else if (typeof predicate === 'string') {
            key = collection[i][predicate];
        }

        //if key already exists
        if (storage[key]) {
            //add to storage object with result from predicate as key, then element to array
            storage[key].push(collection[i]);

        //else if not in storage object
        } else {
            //add value in an array at key in storage object
            storage[key] = [collection[i]];
        } 
    }
    //return storage object
    return storage;
}

var firstLetter = function(word) { return word.charAt(0); };

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

// console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));
// returns { '5': ['apple'], '3': ['cat'], '4': ['boat', 'card', 'bond'] }





JON

function groupBy(collection, predicate){
    // create object
    // for in collection
      // if function run function
      // if proberty get property
        // if value is part of result
          // add to the array at the key
        // else
          // creat an array and add the i
          // assign it to the value of the function or proerty
    // return object output
  }



function groupBy(collection, predicate){
    // create object
    var resultObj = {};
    // for in collection
    for (var i in collection) {
      // if function run function
      if (typeof predicate !== 'string') {
        var key = predicate(collection[i])
      // if proberty get property
      } else {
        var key = collection[i][predicate];
      }
        // if value is part of result
        if (resultObj[key] !== undefined) {
          // add to the array at the key
          resultObj[key].push(collection[i]);
        } else {
        // else
          var newArray = [];
          newArray.push(collection[i]);
          // creat an array and add the i
          resultObj[key] = newArray;
          // assign it to the value of the function or proerty
        }
    }
    // return object output
    return







    mariah



    function groupBy(collection, predicate) {
        // var obj = {}; Create variable for empty object
        
        // set up iteration through array
          //if predicate is string
            // Result of current index value of array becomes key 
            // Check if key exists
              // Use push function to add value to the array at key in obj
            // else
              // make the key value 
          // else use the function
            // Use the return value of index value with function as key
            // if key does exist
              // push current index value to array in key
            // else
              // make the key value
      
        // return obj
      }

      function groupBy(collection, predicate) {
        // var obj = {}; Create variable for empty object
        var obj = {};
        // set up iteration through array
        for (var x = 0; x < collection.length; x ++){
          //if predicate is string
          if (typeof predicate === 'string') {
            // Result of current index value of array becomes key 
            var key = collection[x][predicate];
            // Check if key exists
            if (obj[key]) {
              // Use push function to add value to the array at key in obj
              obj[key].push(collection[x]);
            }  
            // else
            else {
              // make the key value 
              obj[key] = [collection[x]];
            }
          }    
          // else use the function
          else {
            // Use the return value of index value with function as key
            var key = predicate(collection[x]);
            // if key does exist
            if (obj[key]) {
              // push current index value to array in key
              obj[key].push(collection[x]);
            }  
            // else
            else {
              // make the key value
              obj[key] = [collection[x]];
            }
          }
        // return obj
        }
        return obj;
      }






      var functionName = (input) => {
        //create any variables needed
        var results = [];

        //create recursive function (add second parameter if you need to keep track of index)
        var recursionFunction = (param1) => {

          //create basecases (could be more than one reason to jump out of an iteration)
          if (basecase) {
            //add something to results variable if necessary or increment counter
            results.push(param1)
            //jump out of iteration
            return;
          }

          if (otherbasecase) {
            //jump out of iteration
            return;
          }

          //loop through input
          for (var i = 0; i < input.length; i++) {
            //add, subtract, alter param1
            param1 += input[i];

            //invoke recursive function with altered param as input
            recursionFunction(param1);
          }
        }

        //initial invocation of recursion function
        recursionFunction();
        return results;
      };