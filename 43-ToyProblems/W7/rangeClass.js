/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step) {
    this._size = 0;
    this._storage = {};

    step = step || 1;
    let tempStart = start;

    //if no end input
    if (!end) {
        //add start to storage, set size to 1
        this._storage[start] = true;
        this._size = 1;
 
    } else {
        //if end is smaller than start, set step to negative
        if (end < start) {
            step = 0 - step;
        }
        
        //while loop from start to end
        while (start >= Math.min(tempStart, end) && start <= Math.max(tempStart, end)) {
            //add current to object, with key set to true
            this._storage[start] = true;
            //increment size
            this._size++
            //add step to current
            start += step;
        }
        
    }
    
};

Range.prototype.size = function () {
    return this._size;
};

Range.prototype.each = function (callback) {
    let keys = Object.keys(this._storage);
    //loop through keys
    for (let key of keys) {
        //pass key (not the value) through callback
        callback(key);
    }
};

Range.prototype.includes = function (val) {
    return this._storage[val] || false;
};



var range = new Range(9, 1, 1);
console.log(range.each((num) => {
    console.log(num)
}))


///rangeCLass(1, 10, 2)

{
    1: true,
    3: true,
    5: true,
    7: true,
    9: true
}