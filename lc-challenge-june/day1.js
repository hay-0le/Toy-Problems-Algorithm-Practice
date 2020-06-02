// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 **/

//  input:           [4, 2, 7, 1, 3, 6, 9]
//  expected output: [4, 7, 2, 9, 6, 3, 1]


var invertTree = function(root) {
    if (root === null || root.left === null && root.right === null) return root;
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    
    invertTree(root.left);
    
    invertTree(root.right);
    
    
    return root;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = 1;
tree.left.right = 3;
tree.right.left = 6;
tree.right.right = 9;
// console.log(tree)

console.log(invertTree(tree));