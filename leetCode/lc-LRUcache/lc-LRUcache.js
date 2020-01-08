/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._cache = {};

    this._capacity = capacity;
    this._size = 0;

    this._newest = null;
    this._oldest = null;
};

var Node = function (val, next = null, prev = null) {
    this.value = val;
    this.prev = prev;
    this.next = next;
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this._cache[key]) return -1;

    //if key is already most recently called
    if (key === this._newest) {
        return this._cache[key].value;
    
    //if key is the tail
    } else if (key === this._oldest) {
        //temp for old tail/new head
        var oldTail = this._oldest;
        var newTail = this._cache[this._oldest].prev;

        var oldHead = this._newest;
        var newHead = oldTail;

        console.log("old tail", oldTail)
        console.log('newTail', newTail);
        console.log('oldHead', oldHead)

        this._cache[oldHead].prev = newHead;
        if (this._cache[oldHead].next === newHead ) {
            this._cache[oldHead].next === null;
        }

        this._cache[newTail].next = null;
        if (this._cache[newTail].prev === null) {
            this._cache[newTail].prev = newHead;
        }

        this._cache[newHead].prev = null;
        this._cache[newHead].next = oldHead;

        this._oldest = newTail;
        this._newest = newHead;

    //if key is
    } else {
        var selectedNode = this._cache[key];

console.log("SELECTED NODE", selectedNode);
        var previousNode = selectedNode.prev;
        var nextNode = selectedNode.next;

        if (!nextNode) {
            this._cache[key].prev.next = null;
            this.__oldest = this._cache[key].prev;
        } else {

            
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            
            //set oldhead previous to selectedNode
            this._cache[this._newest].prev = key;
        }

        this._head = key;
    }
    // console.log("cache getting", this._cache[1], this._cache[2])
    return this._cache[key].value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var newNode = new Node(value);
    // console.log(this._cache)
    
    //if cache empty
    if (!this._newest) {
        //   console.log("starting cache")
        this._newest = key;
        this._oldest = key;
        
        this._cache[key] = newNode;
        this._size++;
        console.log("beginning of cache", newNode)
        return;
    }
    
    //if key yah
    if (this._cache[key]) {
        // console.log("already exists")
        this._cache[key].value = value;
        // console.log(this._cache)
        this.get(key);
        // console.log(this._cache[key])
        return "updated"
        
    } else {        
        //check if over capacity
        if (this._size === this._capacity) {
            console.log('deleting from cache')
            var newTail = this._cache[this._oldest].prev;
            delete this._cache[this._oldest];
            this._oldest = newTail;
            // console.log("new", newTail)
            
            console.log("cache after deleting", this._cache[1], this._cache[2])
            this._size--;
        }

        // console.log("adding to cache")
        //if nah
        newNode.next = this._newest;

        //add to cache
        this._cache[key] = newNode;
        
        //add new head to old head previous
        if (!this._cache[this._newest].prev) {
            this._newest = key;
            this._oldest = key;
        
            this._cache[key] = newNode;
            this._size++;
            console.log("beginning of cache", newNode)
            return;
        } else {
            this._cache[this._newest].prev = key;
        }

        //change head
        this._newest = key;
        // console.log("newest after", this._newest)

        this._size++;
        console.log("cache after adding", this._cache[1], this._cache[2])

    }


};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// var cache = new LRUCache(2)
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// console.log(cache.get(4));       // returns 4
 
var cache = new LRUCache(2); // limit of 3 items
cache.put(1, 1)
cache.put(2, 2);
cache.get(1) //=> 2
cache.put(3, 3);
// console.log(cache.put("item4", 4))
console.log(cache.get(2));
// console.log(cache.get("item3")) //=> 3)
// // item1 was removed because it was the oldest item by insertion/usage
// cache.get("item1") //=> nul