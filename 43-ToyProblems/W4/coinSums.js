/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {

    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var numberOfOptions = 0;


    //recursive function subtract parameters: remainder and index (add index so that you only add coins the same or smaller to combo -- dont add coins to the right of the current one)
    var subtract = (remainder, index) => {
      console.log("new remainder", remainder)
        //basecase - check if remainder is 0
        if (remainder === 0) {
            //if 0 you have found one combination, increment numberOfOptions
            numberOfOptions++;
            //return
            return;
        }   
            
        //basecase - check if remainder is less than 0
        if (remainder < 0) {
            //return out (current combination will not equal total)
            return;
        }
        

        //loop through each coin largest to smallest
        for (var i = index; i >= 0; i--) {
          console.log("reminader", remainder)
          console.log("coin", coins[i])
            //invoke subtract with remainder - coin
            subtract(remainder - coins[i], i);
        }
        
    }
    
    //invoke subtract with total
    subtract(total, coins.length - 1)
    //return numberofOptions
    return numberOfOptions;
};

console.log(makeChange(10));






// var makeChange = function(total) {

//     var output = 0;
//     var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  
//     (function recurse (index, tot) {
//       var currentDenomination = denominations[index];
//       if (index === 0) {
//         // support a lowest currency that is not 1
//         tot % currentDenomination === 0 && output++;
//         return;
//       }
//       while (tot >= 0) {
//         recurse(index - 1, tot);
//         tot -= currentDenomination;
//       }
//     })(denominations.length - 1, total);
  
//     return output;
//   };
  
  
  /* MEMOIZED SOLUTION - INCREASED EFFICIENCY*/
  /*
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var takeWhile = function (arr, predicate) {
    var result = [];
    var i = 0;
    while (predicate(arr[i])) {
      result.push(arr[i++]);
    }
    return result;
  };
  var possibleChoices = function (total, max) {
    return takeWhile(coins, function (coin) {
      return total >= coin && coin <= max;
    });
  };
  var memoize = function (func, context) {
    var cache = {};
    return function () {
      if (!(JSON.stringify(arguments) in cache)) {
        cache[JSON.stringify(arguments)] = func.apply(context, arguments);
      }
      return cache[JSON.stringify(arguments)];
    };
  };
  var makeChange = memoize(function (total, last) {
    last = last || total;
    if (total === 0) {
      return 1;
    }
    var result = 0;
    var choices = possibleChoices(total, last);
    for (var i = 0; i < choices.length; i++) {
      var coin = choices[i];
      result += makeChange(total - coin, coin);
    }
    return result;
  });
  */