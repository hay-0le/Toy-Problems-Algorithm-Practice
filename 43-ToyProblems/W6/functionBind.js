/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/


// Function Bind
// Implement the function ‘bind’, which accepts a function and a context as arguments. 
  //The context argument should override an existing context that the function is defined in.   
  //Your bind function should return the passed in function. "

var bind = function(func, context, ...bindArgs) {
    // var bindArgs = Array.prototype.slice.call(arguments, 2);
  
    //need to return function, for when a variable it set to it
    return function bindingFunction (...args) {
      // var args = Array.prototype.slice.call(arguments)
      //apply func to context and return it
      args = bindArgs.concat(args)
      return func.apply(context, args)
    }
  
  };
  

  
  
  Function.prototype.bind = function(context, ...argsToBind) {
    // console.log('this', this)
    var funcToBind = this;

    //change args from array like obj, to array
    // var argsToBind = Array.prototype.slice.call(arguments, 1);
    
    return function bindingFunction () {
    var args = argsToBind.concat(Array.prototype.slice.call(arguments));
    
    return funcToBind.apply(context, args);
  }
    
};


var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true