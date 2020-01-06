var merge = (intervals) => {
    
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    
    var mergedIntervals = [];
    
    intervals.forEach(interval => {
        
        if (!mergedIntervals[mergedIntervals.length - 1] || mergedIntervals[mergedIntervals.length - 1][1] < interval[0]) {
            mergedIntervals.push(interval);
            
        } else if (mergedIntervals[mergedIntervals.length - 1][1] < interval[1]) {
            mergedIntervals[mergedIntervals.length - 1][1] = interval[1]
        }
    })

    return mergedIntervals;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
