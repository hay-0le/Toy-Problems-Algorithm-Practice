/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

///////// OPTION 1 ////////
//iterative
var nthFibonacci = function (n) {
    //create storage array with 0 and 1 (start of fib. sequence)
    let storage = [0, 1];

    //loop while index is 2 (we have the first two indices in the storage array already) until it is equal to n
    for (let i = 2; i <= n; i++) {
        //add num from two indicies back with num from one indicies back, then push the result to storage array
        storage.push(storage[i - 2] + storage[i - 1]);
    }

    return storage[n];
};
  

///////// OPTION 4? ///////
var nthFibonacci = function (n) {
        if ( n < 2) return n;

        let [prevNum, currentNum] = [0, 1];

        while (n > 1) {
                [prevNum, currentNum] = [currentNum, prevNum + currentNum];
                n--;
        }

        return currentNum;
}






// 0 1 1 2 3 5


/*example nthFibonacci(5)
1st run ---->                                         ----------    nthFib(4) + nthFib(3)   ----------
        ---->                                        /                                                \
        ---->                                       /                                                  \
2nd run ---->                         nthFib(3)    +    nthFib(2)                            nthFib(2)  +  nthFib(1)
        ---->                          /\                    /\                                  /\              \ 
        ---->                         /  \                  /  \                                /  \              \
        ---->                        /    \                /    \                              /    \              \
3rd run ---->                nthFib(2) + nthFib(1)  nthFib(1) + nthFib(0)      +      nthFib(1) + nthFib(0)        (1)
        ---->                   /\          \           \          /                       \          /              \
        ---->                  /  \          \           \        /                         \        /                \
        ---->                 /    \          \           \      /                           \      /                  \
4th run ---->         nthFib(1) + nthFib(0) + (1)         (1) + (0)                          (1) + (0)                 (1)
        ---->             |          |         |           |     |                            |    |                    |
        ---->             |          |         |           |     |                            |    |                    |
5th run ---->             1     +    0    +    1     +     1  +  0          +                 1  + 0           +        1    = 5


*/
///////////OPTION 2 ////////
//recursion
var nthFibonacci = function (n) {
    //base case for first two indicies
    if (n < 2) return n;

    //return nthFibonacci with n - 1 as argument, and add it to nthFibonacci with n - 2 as parameter
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}







//////// OPTION 3 //////////
//
// var nthFibonacci = function (n) {
//     //if n 1-3 return that num
//     if ([0, 1].includes(n)) return n;

//     //declare variables prevNum set to 0
//     //declare variable currentNum set to 1
//     let prevNum = 0;
//     let currentNum = 1;
//     let prevNumHolder;
//     let sequence = 2;

//     //loop while n is greater than or equal to 0
//     while(sequence <= n) {

//         //declare prevNumHolder set to prevNum
//         prevNumHolder = prevNum;
//         //set prevNum to currentNum
//         prevNum = currentNum;
//         //set add prevNumHolder to currentNum
//         currentNum += prevNumHolder;
//         //decrement n
//         sequence++;
//     }

//     return currentNum;
//   };



  console.log(nthFibonacci(1)) //1
  console.log(nthFibonacci(2)) //1
  console.log(nthFibonacci(3)) //2
  console.log(nthFibonacci(4)) //3
  console.log(nthFibonacci(5)) //5



// let renderCurve() => {
//     for(var a = 1, b = 10; a*b; a++, b--);
//     output.innerHTML += new Array(a*b).join('*') + '<br/>';
// }