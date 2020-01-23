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
// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function. "
// And here they are for the second one

var bind = function(func, context) {
    // TODO: Your code here
    var otherArgs = Array.prototype.slice.call(arguments, 2);
  
    //need to return function, for when a variable it set to it
    return function bindingFunction () {
      var args = Array.prototype.slice.call(arguments)
      //apply func to context and return it
      args = otherArgs.concat(args)
      return func.apply(context, args)
    }
  
  };
  
  /*
   * example 2:
   *
   * var func = function(a, b){ return a + b };
   * var boundFunc = func.bind(null, 'foo');
   * var result = boundFunc('bar');
   * result === 'foobar'; // true
   *
  */
  
  Function.prototype.bind = function(context) {
    // TODO: Your code here
    var funcToBind = this;
    //change args from array like obj, to array
    var argsToBind = Array.prototype.slice.call(arguments, 1);
  
    return function bindingFunction () {
      var args = argsToBind.concat(Array.prototype.slice.call(arguments));
  
      return funcToBind.apply(context, args);
    }
  
    //try map through arguments instead
  
  };