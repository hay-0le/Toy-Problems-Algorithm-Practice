let find3 = (array) => {
    let numSet = new Set(array);

    for (let num of array) {
        let streak = 1;
        let tempNum = num;

        while (numSet.has(tempNum - 1) && streak < 3) {
            streak++;
            tempNum--;
        }
        tempNum = num;
        while (numSet.has(tempNum + 1) && streak < 3) {
            streak++;
            tempNum++;
        }
        if (streak === 3) return 1;
    }
    return 0;
}

// let find3 = (array) => {
//     let numSet = new Set(array);

//     let findSeq = (currentSequence = 0, num) => {

//         if (numSet.has(num) && currentSequence < 3) {

//         }
        
//     }
// }

console.log(find3([1, 2, 3]))
console.log(find3([100, 4, 10, 5, 9, 0, 3]))
console.log(find3([1, 3, 6, 7, 0]))