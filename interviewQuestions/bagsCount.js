// We need to deliver a package of Skittles bags.  You will be given an inventory of small bags (1 kilo each) and big bags
// (5 kilos each) along with the goal amount of kilos we need to ship the customer.  Return the amount of small bags the package
// will contain assuming we always use big bags first.  Return -1 if it cannot be done.
// Input
// small (type: int) - The number of small bags we have to work with
// big (type: int) - The number of big bags we have to work with
// goal (type: int) - The goal weight of the package that we need to ship out

//what do we do with 0?
// console.time("getBags:")
// let getBags = (small, big, goal) => {
//     let tempSmall = small;

//     while (goal >= 5 && big) {
//         goal -= 5;
//         big--;
//     }

//     while (goal > 0 && tempSmall) {
//         goal -= 1;
//         tempSmall--;
//     }

//     return (small - tempSmall > 0 && goal === 0 )? small - tempSmall : -1;
// }
// console.timeEnd("getBags:")

// console.time("getBags:")
// let getBags = (small, big, total) => {
//     //find how many big bags can fit in the total, then if we are given that many, subtract that amount from total
//     //if we do not have enough of the big bags, subtract all of the ones that we DO have
//     let numLeftAfterBigBags = total - (big >= Math.floor(total / 5) ? 
//         Math.floor(total / 5) * 5
//         : 
//         (big * 5));
// console.log(numLeftAfterBigBags)
//         //after subtracting the big bags, see if we have enough small bags to fill the rest of the order
//         return (numLeftAfterBigBags > small || numLeftAfterBigBags === 0) ? -1 : numLeftAfterBigBags;

// }
// console.timeEnd("getBags:");

// // console.log(getBags(10, 5, 12)); //2
// // console.log(getBags(10, 5, 15)); //-1
// // console.log(getBags(1, 5, 12)); //-1
// // console.log(getBags(100, 5, 120)); //95
// // console.log(getBags(100, 5, 0)); // -1
// console.log(getBags(4, 1, 9)); // -1


function rotLeft(a, d) {
    let arr = Array.from(Array(a + 1).keys()).slice(1);

    return arr.slice(d).concat(arr.slice(0, d));
}


console.log(rotLeft(5, 2))