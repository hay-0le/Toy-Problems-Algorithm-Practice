// Two City Scheduling
// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

 
// Example 1:

// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 

// Note:

// 1 <= costs.length <= 100
// It is guaranteed that costs.length is even.
// 1 <= costs[i][0], costs[i][1] <= 1000

/**
 * @param {number[][]} costs
 * @return {number}
 */

 //input: array of arrays. index 0: cityA cost, index 1: cityB cost
 //ouput: number -- min total to get all the people evenly to each city at lowest cost
 //


//time complexity: garbage shit
var twoCitySchedCost = function(costs) {
    let minCosts = null;
    
    let flyPeople = (numToCityA = 0, numToCityB = 0, currentTotal = 0, index = 0) => {
        //either city exceeds capacity
        if (numToCityA > costs.length / 2 || numToCityB > costs.length / 2) {
            return;
        }

        //currentTotal goes over minCosts
        if (minCosts !== null && currentTotal >= minCosts) {
            return;
        }

        //once everyone has been sorted
        if (costs[index] === undefined) {
            //check if currentTotal is less than minCosts --> update
            if (currentTotal < minCosts || minCosts === null) {
                minCosts = currentTotal;
            } 
            return;
        }

        // for each person
        //fly to cityA
        flyPeople(numToCityA + 1, numToCityB, currentTotal + costs[index][0], index + 1);
        //fly to cityB
        flyPeople(numToCityA, numToCityB + 1, currentTotal + costs[index][1], index + 1);
    }

    flyPeople();
    return minCosts;
};







var twoCitySchedCost = function(costs) {

    costs.sort((a, b) => {
        return (Math.abs(b[0] - b[1])) - (Math.abs(a[0] - a[1]))
    })

    let cityA = {
        count: 0,
        total:0
    }

    let cityB = {
        count: 0,
        total:0
    }

    costs.forEach(x => {
        if (x[0] < x[1]) {
            cityA.count < costs.length/2 ? cityA = {...cityA, count: cityA.count + 1, total: cityA.total + x[0]} : cityB = {...cityB, count: cityB.count + 1, total: cityB.total + x[1]};
        } else {
            cityB.count < costs.length/2 ? cityB = {...cityB, count: cityB.count + 1, total: cityB.total + x[1]} : cityA = {...cityA, count: cityA.count + 1, total: cityA.total + x[0]};
        }
    })

    return cityA.total + cityB.total;
}





var twoCitySchedCost = function(costs) {

    costs.sort((a, b) => {
        return (a[0] - a[1]) - (b[0] - b[1])
    })

    total = 0;

    for (let i = 0; i < costs.length/2;i++) {
        total += costs[i][0] + costs[costs.length/2 + i][1];
    }

    return total;
}





console.time("Total Cost")
// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))
// console.log(twoCitySchedCost([[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]]))
console.log(twoCitySchedCost([[60,749],[520,113],[951,37],[143,789],[881,936],[60,911],[531,261],[292,335],[515,462],[839,555],[268,482],[121,19],[75,942],[498,317],[499,271],[351,322],[602,169],[807,903],[154,539],[806,61],[449,889],[637,954],[505,505],[672,742],[752,782],[127,207],[457,505],[773,357],[778,890],[900,718],[692,483],[992,715],[166,694],[615,618],[426,50],[151,714],[151,434],[72,874]]))
// console.log(twoCitySchedCost([[60,749],[520,113],[951,37],[143,789],[881,936],[60,911],[531,261]]))
console.timeEnd("Total Cost")