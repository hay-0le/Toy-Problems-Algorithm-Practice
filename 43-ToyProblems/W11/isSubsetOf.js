/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

//Imma one line this shh
Array.prototype.isSubsetOf = function (arr) {
    return this.every(element => arr.includes(element))
};


var a = ['commit','push'];
var b = ['merge','reset','reset'];
var c = ['commit', 'eternal git error', 'push']

console.log(b.isSubsetOf(['reset','merge','add','commit']))  //true
console.log(a.isSubsetOf(['commit','rebase','push','blame']) )  //true
console.log(c.isSubsetOf(['commit','rebase','push','blame']) )  //false