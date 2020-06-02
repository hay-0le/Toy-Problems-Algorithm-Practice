var subsets = function(nums) {
    let results = [[]];
    
    nums = nums.filter((num, i) => { return nums.indexOf(num) === i});

    let recurse = (current = [], index = 0) => {
       //base case
       if (index === nums.length) {
           return;
       }

       for (let i = index; i < nums.length; i++) {
           current.push(nums[i]);
           results.push([...current]);
           recurse(current, i + 1)
           current.pop();
       }
    
    }
    
    recurse();
    return results;
};

console.log(subsets([1, 2, 3, 3]))