// /*
//  * Design and implement an LRU, or Least Recently Used, cache.
//  *
//  * An LRU cache gives O(1) get(key) and set(key, val) operations,
//  * much like a hashtable, but once it reaches its limit for stored
//  * number of items, removes the least recently used (i.e. the oldest
//  * by get-date) item from the cache in O(1) time.
//  *
//  * For instance:
//  *
//  * var cache = new LRUCache(3); // limit of 3 items
//  * cache.set("item1", 1);
//  * cache.set("item2", 2);
//  * cache.set("item3", 3);
//  * cache.set("item4", 4);
//  *
//  * cache.get("item3") //=> 3
//  * cache.get("item2") //=> 2
//  * // item1 was removed because it was the oldest item by insertion/usage
//  * cache.get("item1") //=> null
//  *
//  * // item4 is removed to make room, because it is the oldest by usage,
//  * // which takes priority.
//  * cache.set("item5", 5);
//  *
//  * // item3 is also removed, because it was retrieved before item2 was
//  * // last retrieved.
//  * cache.set("item6", 6);
//  *
//  * You will need a doubly-linked list (provided).
//  */




var LRUCache = function (limit) {
  this._limit = limit || 25;
  this._cache = {};
  this._size = 0;
// [ key3, "key1", key2,]
  this._orderList = [];
};

var Node = function (val, key) {
  this._val = val || null;
  this._key = key || null;
};

LRUCache.prototype.size = function () {
  return this._size;
};

LRUCache.prototype.promote = function (key) {
  //get index of key in the orderList array
  if (this._orderList.length === 0) {
    this._orderList.push(key);
    return;
  }
  
  let keyIdx = this._orderList.indexOf(key);

  if (keyIdx > -1) {
    this._orderList.splice(keyIdx, 1)
    this._orderList.unshift(key);
  } else {
    this._orderList.unshift(key)
  }
}

LRUCache.prototype.get = function (key) {
  //if key does not exist return null
  if (!this._cache[key]) return null;

  let node = this._cache[key];
  this.promote(key);
  return node._val;
}

LRUCache.prototype.set = function (key, val) {
  //check if cache is at limit
  if (this._size >= this._limit) {
      this.delete();
  }

  //create new node
  let node = new Node(key, val);
  //add item to cache (over writing value if key already exists)
  this._cache[key] = node;
  //move to front of the list
  this.promote(key);
  this._size++;
}

LRUCache.prototype.delete = function () {
  //set variable removedItem to orderList.pop (removes from list)
  let removedItem = this._orderList.pop();
  console.log('deleting: ', removedItem)

  //Use removedItem to delete from cache
  delete this._cache[removedItem];
  this._size--;
}






var cache = new LRUCache(3); // limit of 3 items
// console.log(cache._limit)
cache.set("item1", 1);
cache.set("item2", 2);
cache.set("item3", 3);
cache.set("item4", 4);

cache.get("item2") //=> 2
console.log("I should be null:", cache.get("item1")) //=> null
// cache._cache["item1"] = 1;
// console.log(cache._cache)



















// var LRUCache = function (limit) {
//   this._limit = limit || 25;
//   this._cache = {};
//   this._size = 0;

//   this._list = new List();
// };

// var LRUCacheItem = function (val, key) {
//   this._val = val || null;
//   this._key = key || null;
// };

// LRUCache.prototype.size = function () {
//   return this._size;
// };

// LRUCache.prototype.get = function (key) {
//   //if key exists in the cache, move it to the from of the list (most recently used) then return its value
//   if (this._cache[key]) {
//     let node = this._cache[key];
//     this._list.moveToFront(node);

//     return node.val;

//   } else {
//     return null;
//   }

// };

// LRUCache.prototype.set = function (key, val) {
//   //check if key exists in cache, update val if necessary, then move to from of list (most recently used)
//   if (this._cache[key]) {
//     let node = this._cache[key];
//     node._val = val;

//     this._list.moveToFront(node);
//   } else {
//     //create new node, add it to cache, set it to the front of the list (most recently used)
//     //check if cache is at limit
//     if (this._size >= this._limit) {
//       let removedNode = this._list.pop();
//       delete this._cache[removedNode.key];
//       this._size--;
//     }
//     //create new item, add it to cache, put in front of list
//     let newItem = new LRUCacheItem(val, key);
//     this._cache[newItem.key] = newItem;
//     this._list.moveToFront(newItem)
//   }

// };



// var List = function () {
//   this.head = null;
//   this.tail = null;
// };

// var ListNode = function (prev, val, next) {
//   this.prev = prev || null;
//   this.val = val;
//   this.next = next || null;
// };

// // Insert at the head of the list.
// List.prototype.unshift = function (val) {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = new ListNode(null, val, null);
//   // Not empty list.
//   } else {
//     this.head = new ListNode(null, val, this.head);
//     this.head.next.prev = this.head;
//   }

//   return this.head;
// };

// // Delete at the head of the list.
// List.prototype.shift = function () {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     return null;
//   // Not empty list.
//   } else {
//     var head = this.head;
//     this.head = this.head.next;
//     head.delete();
//     return head.val;
//   }
// };

// // Insert at the end of the list.
// List.prototype.push = function (val) {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = new ListNode(null, val, null);
//   // Not empty list.
//   } else {
//     this.tail = new ListNode(this.tail, val, null);
//     this.tail.prev.next = this.tail;
//   }

//   return this.tail;
// };

// // Delete at the end of the list.
// List.prototype.pop = function () {
//   // Empty list
//   if (this.head === null && this.tail === null) {
//     return null;
//   // Not empty list.
//   } else {
//     var tail = this.tail;
//     this.tail = this.tail.prev;
//     tail.delete();
//     return tail.val;
//   }
// };

// // Move a node to the front of the List
// List.prototype.moveToFront = function (node) {
//   if (node === this.tail) {
//     this.pop();
//   } else if (node === this.head) {
//     return;
//   } else {
//     node.delete();
//   }

//   node.prev = node.next = null;

//   // Don't delegate to shift, since we want to keep the same
//   // object.

//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = node;
//   // At least one node.
//   } else {
//     this.head.prev = node;
//     node.next = this.head;
//     this.head = node;
//   }
// };

// // Move a node to the end of the List
// List.prototype.moveToEnd = function (node) {
//   if (node === this.head) {
//     this.shift();
//   } else if (node === this.tail) {
//     return;
//   } else {
//     node.delete();
//   }

//   // Don't delegate to push, since we want to keep the same
//   // object.

//   node.prev = node.next = null;

//   // Empty list
//   if (this.head === null && this.tail === null) {
//     this.head = this.tail = node;
//   // At least one node.
//   } else {
//     this.tail.next = node;
//     node.prev = this.tail;
//     this.tail = node;
//   }
// };

// ListNode.prototype.delete = function () {
//   if (this.prev) { this.prev.next = this.next; }
//   if (this.next) { this.next.prev = this.prev; }
// };

// var cache = new LRUCache(3); // limit of 3 items
// cache.set("item1", 1);
// cache.set("item2", 2);
// cache.set("item3", 3);
// cache.set("item4", 4);
// cache.get("item3") //=> 3
// cache.get("item2") //=> 2
// cache.get("item1") //=> null