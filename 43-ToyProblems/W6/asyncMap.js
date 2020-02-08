

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function (tasks, callback){
  var resultsCount = 0;
  var resultsArray = [];
  
  //creating an array looping through each task
    //ivoking each task and saving the result to resultsArray
  tasks.forEach(function(task, i) {
    task(function(arg) {
      resultsArray[i] = arg;
      resultsCount += 1;
      if (resultsCount === tasks.length) {
        callback(resultsArray);
      }
    });
  });
};


var asyncMap = (tasks, callback) => {
  //build array turning each task into a promise
  var arrayOfPromises = tasks.map((task) => {
    return new Promise(task);
  });
  
  //Promise.all returns array of all results from the promise
  return Promise.all(arrayOfPromises)
    .then((values) => {
      callback(values);
  })
}





asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
]
  ,
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log("results", results); // ['one', 'two']
 });