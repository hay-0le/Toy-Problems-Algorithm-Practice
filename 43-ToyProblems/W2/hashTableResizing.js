/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

let makeHashTable = function() {
  let result = {};
  let storage = [];
  let storageLimit = 4;
  let size = 0;
  //boolean to show if in the middle of a resizing
  let resizing = false;

  let resize = (newSize) => {
    if (resizing === false) {

      resizing = true;
      let buckets = storage;

      storageLimit = newSize;
      storage = [];
      size = 0;

      //iterate through the bucket and insert each tuple into storage
      buckets.forEach(bucket => {
        bucket.forEach(tuple => {
          result.insert(tuple[0], tuple[1])
        })
      })
    }

    resizing = false;
  }


  
  result.insert = (k, v) => {
    // TODO: implement `insert`
    let idx = getIndexBelowMaxForKey(k, storageLimit);
    let bucket = storage[idx] || [];
    let replaced = false;

    for (let tuple of bucket) {
      if (tuple[0] === k) {
        tuple[1] = v;
        replaced = true;
      }
    }

    if (replaced === false) {
      bucket.push([k, v])
      size++;
    }

    //resize? If size exceeds 75% of our storage limit
    if (size > storageLimit * 0.75) {
      resize(storageLimit * 2);
    }

  };

  result.retrieve = (k) => {
    // TODO: implement `retrieve`
    let idx = getIndexBelowMaxForKey(k, storageLimit);
    let bucket = storage[idx];
 

    for (let tuple of bucket) {
      if (tuple[0] === k) {
        return tuple[1];
      }
    }

  };

  result.remove = (k, v) => {
    // TODO: implement `remove`
    let idx = getIndexBelowMaxForKey(k, storageLimit);

    let bucket = storage[idx];
    let index, value;

    bucket.forEach((pair, i) => {
      if (pair[0] === k) {
        value = pair[1];
        index = i;
      }
    })

    if (index) {
      bucket.splice(index, 1);
      size--;
    }

    //resize if less than 25% of storage is being utilized
    if (storageLimit > 4 && size < storageLimit * 0.25) {
      resize(storageLimit / 2);
    }

    return value;
  };


  return result;
};





var hashTable = makeHashTable();
hashTable.insert("William Shatner\'s most well known role', 'Captain Kirk");
hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
hashTable.insert('keanu reeves best movie', 'The Matrix');

var value = hashTable.retrieve('William Shatner\'s most well known role'); //should return "Captain Kirk"

console.log(value)