/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
    // TODO: Your code here
    
    let eventsStorage = {};
    
    
    obj.on = (eventName, callback) => {
      //if event doesn't exists, add it to obj with empty array
      if (!eventsStorage[eventName]) {
        eventsStorage[eventName] = []
      }
      //add callback to the eventName value array
      eventsStorage[eventName].push(callback);
    }

    
    obj.trigger = (triggeredEvent, ...args) => {
      let events = eventsStorage[triggeredEvent];
      //ES5 get args with Array.prototype.slice.call(arguments, 1)
      
      //if the event exists, loop through each event
      if (events.length) {
        for (let event of events) {
          event.apply(obj, args)
        }
      }
    }

    return obj;
  };



var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
   console.log('Age changed');
   obj.age++;
});
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
console.log(obj.age)