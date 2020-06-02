var twoSum = function(nums, target) {
    let storage = {};
    
    for (let i = 0; i < nums.length; i++) {
        console.log(storage[target - nums[i]])
        if (storage.hasOwnProperty(target - nums[i])) {
            console.log("target exists")
            return [storage[target - nums[i]], i]
        } else {
            storage[nums[i]] = i;
        }
    }
}; 


console.log(twoSum([2, 7, 11, 15], 9))