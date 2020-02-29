/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
    this.children = [];
  };
  
  /**
    * add an immediate child
    */
  Tree.prototype.addChild = function(child) {
    if (!this.isDescendant(child)) {
      this.children.push(child);
    } else {
      throw new Error('That child is already a child of this tree');
    }
    return this;
  };
  
  /**
    * return the lowest common ancestor of the two child nodes.
    * (assume for these examples that only a women can be the parent of a child)
    * more examples:
    *  1.) between me and my brother -> my mom
    *  2.) between me and my cousin -> my grandma
    *  3.) between my grandma and my grandma -> my grandma
    *  4.) between me and a potato -> null
    */
  Tree.prototype.getClosestCommonAncestor = function(child1, child2) {

    let child1Ancestors = this.getAncestorPath(child1);
    let child2Ancestors = this.getAncestorPath(child2);

    if (!(child1Ancestors && child2Ancestors)) return null;

    let shortestLength = Math.min(child1Ancestors.length, child2Ancestors.length);

    //default closest ancestor to root
    let closestCommonAncestor = this;

    for (let i = 0; i < shortestLength; i++) {
      if (child1Ancestors[i] === child2Ancestors[i]) {
        closestCommonAncestor = child1Ancestors[i];
      }
    }

    return closestCommonAncestor;

  };
  
  /**
    * should return the ancestral path of a child to this node.
    * more examples:
    * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
    * 2.) mom.getAncestorPath(me) -> [mom, me]
    * 3.) me.getAncestorPath(me) -> [me]
    * 4.) grandma.getAncestorPath(H R Giger) -> null
    */
  Tree.prototype.getAncestorPath = function(child, path = []) {


    //add current to path
    if (this.isDescendant(child) || this === child) {
      console.log(this)
      path.push(this);
    } else {
      return;
    }
    
    if (this.children.length < 1) return path;

    for (let descendant of this.children) {
      return descendant.getAncestorPath(child, path);
    }

    
    return path;
  };
  
  /**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
  Tree.prototype.isDescendant = function(child) {
    if (this.children.indexOf(child) !== -1) {
      // `child` is an immediate child of this tree
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].isDescendant(child)) {
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  };
  
  /**
    * remove an immediate child
    */
  Tree.prototype.removeChild = function(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      // remove the child
      this.children.splice(index, 1);
    } else {
      throw new Error('That node is not an immediate child of this tree');
    }
  };

  var grandma = new Tree();
  var mom = new Tree();
  var auntElaine = new Tree();
  var me = new Tree();
  grandma.addChild(mom);
  grandma.addChild(auntElaine);
  mom.addChild(me);
  var path = grandma.getAncestorPath(me);

console.log(path); // => [grandma, mom, me]