var findMedianSortedArrays = function(nums1, nums2) {
    
    //arrays dont blend
    //if last num first array smaller than first num of second array OR last num second array smaller than first num of first array
    if (nums1[nums1.length - 1] < nums2[0] || nums2[nums2.length - 1]  < nums1[0]) {
        //declare and set smallerArray to array with smallest first number
        let smallerArray = nums1[0] < nums2[0] ? nums1 : nums2;
        //delcare and set largerArray to whatever smallerArray isn't
        let largerArray = nums1[0] < nums2[0] ? nums2: nums1;
        //declare totalLength set to length of two arrays
        let totalLength = smallerArray.length + largerArray.length;
        //declare middleIdx ---- if totalLength is odd divide it by two and round down --  if its even grab two indexes legnth / 2 and length / 2 - 1, add them together divide by 2
        let middleOfTwoArrays = totalLength % 2 === 1 ? [Math.floor(totalLength / 2)] : [(totalLength / 2) - 1, totalLength / 2]; 
        console.log(middleOfTwoArrays)
        //if middleIdx[0] is greater than smallerArray length (middleIdx is in largerArray)
        if (middleOfTwoArrays[0] >= smallerArray.length) {
            let num = largerArray[middleOfTwoArrays[0] - smallerArray.length];

            //return largerArray at index middleIdx - smallerArray.length
            return middleOfTwoArrays[1] ? (num + largerArray[middleOfTwoArrays[1]]) / 2 : num;
        
        //else middleInx is in smallerArray
        } else {
            //deal with if second index of middleofTwoArrays is in largeArray or small array
            //return smallerArray at middleIdx
            return middleOfTwoArrays[1] ? (num + largerArray[middleOfTwoArrays[1]]) / 2 : num;
        }
            
    }//else arrays blended
    
        //loop while total length of both arrays is larger than 2 and length of each array is bigger than 0
            //if first of num1 is smaller than first of num2 shift first from nums1 else shift first from nums2
            //if last of nums1 is bigger than last of nums2 pop nums1 else pop nums2
        
        //if nums2 only left
    
            //return if nums2 length even number @ (nums2 length / 2 added to nums2 length / 2 + 1) / 2 ELSE number @ nums2 length / 2 
    
        //if nums1 only left
    
            //return if nums1 length even number @ (nums1 length / 2 added to nums1 length / 2 + 1) / 2 ELSE number @ nums1 length / 2 
    
        //else (each array will have one left)
            
            //return nums1 + nums2 / 2
        

        
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 3], [5, 6, 8]))
// console.log(findMedianSortedArrays())
// console.log(findMedianSortedArrays())