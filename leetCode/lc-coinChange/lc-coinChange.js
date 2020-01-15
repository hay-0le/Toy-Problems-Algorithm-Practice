var coinChange = function(coins, total) {
    //input: total to aim for (number)
    //output: number- how many combinations of coins you can use to add up to total
    //edge cases --> will total be given in euro? need to change to pence?
  
    //if (total in euro) {
      //change to pence
    //}
   
  
    var count = 0;
  
    
    (function coinCounter (i, remainder) {
        //base cases
        var currentCoin = coins[i];
        if (i === 0) {
            remainder % currentCoin === 0 && count++
            return;
        }
        
        while (remainder >= 0) {
            coinCounter(i - 1, remainder);
            remainder -= currentCoin;
        }
    })(coins.length - 1, total)
    
    return count;
    
};













var coinChange = function(coins, amount) {
    
    if (amount === 0 || coins.length < 1) return 0;
    
    //sort coins largest to smallest
    coins = coins.sort((a, b) => b - a);
    count = -1;
    

    //recursion function add, takes in total, default to zero and numCoints = 0
    var add = (total = 0, coinCount = 0) => {
        if (count > 0) return;

        //basecase check if total = amount
        if (total === amount) {
            if (coinCount < count || count < 0) count = coinCount;
            return;
        }
        
        //loop through each of the coins
        for (var coin of coins) {
            if (total + coin <= amount) {
                add((total + coin), coinCount + 1)

            }
        }
    }
    
    //call add function
    add();
    return count;
};

console.log(coinChange([1, 2, 5], 100))


function coinChange(coins, amount) {
    let finalCount = -1;
    let currentCount = 0
    let currentTotal = 0
    
    //check if coins array empty, or amount is zero
    if (coins.length === 0 || amount === 0) return -1
    
    //sort coins array largest to smallest
    coins = coins.sort((a, b) => b - a);
console.log(coins)
    //loop as long total is less than amount
    while (currentTotal < amount && coins.length) {
        
      if (currentTotal + coins[0] === amount) {
          finalCount = currentCount + 1;
          break;
      } else if (currentTotal + coins[0] < amount) {
          currentTotal += coins[0];
          currentCount++;
      } else {
          coins.shift();
      }
    }
    
    return finalCount;
  }

// console.log(coinChange([186,419,83,408], 6249))