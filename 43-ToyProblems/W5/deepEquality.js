/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(apple, orange) {
    //if strictly equal return true (when comparing values with reursion)
    if (apple === orange) return true;

    //if one is empty and one isn't, they wont be equal
    if ((!apple && orange) || (!orange & apple)) return false;
    
    //Check to make sure both are an object
    if (!(apple instanceof Object) || !(orange instanceof Object)) return false;

    //if both objects dont have the same amount of keys they wont be equal
    if (Object.keys(apple).length !== Object.keys(orange).length) return false;

    //If they have same about of keys and one is zero, two empty objects will be equal
    if (Object.keys(apple).length === 0) return true;

    //loop through each key in apple
    for (var key in apple) {
        // if orange does not have that key or if the keys are not the same return false
        if (!(orange[key] && deepEquals(apple[key], orange[key]))) {
            return false;;
        }
    }

    return true;
};


var deepEquals = (apple, orange) => {
    return JSON.stringify(apple) === JSON.stringify(orange);
}
// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false

