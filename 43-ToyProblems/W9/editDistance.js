// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

  function editDistance(str1, str2) {
  //base cases if either string is empty, return length of the other
  if(str1.length === 0) return str2.length; 
  if(str2.length === 0) return str1.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= str2.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= str1.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= str2.length; i++){
    for(j = 1; j <= str1.length; j++){
        
      if(str2.charAt(i-1) == str1.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                matrix[i][j-1] + 1, // insertion
                                matrix[i-1][j] + 1); // deletion
      }
    }
  }

  //return the number in the bottom right cell
  return matrix[str2.length][str1.length];
};
console.log(editDistance('wednesday', 'sunday'))











// //version that only needs O(min(m,n)) memory, instead of the original's O(m*n):
// function editDistance(str1, str2) {
//         if(str1.length == 0) return str2.length; 
//         if(str2.length == 0) return str1.length;
      
//         // swap to save some memory O(min(a,b)) instead of O(a)
//         if(str1.length > str2.length) {
//           var tmp = a;
//           a = b;
//           b = tmp;
//         }
      
//         var row = [];
//         // init the row
//         for(var i = 0; i <= str1.length; i++){
//           row[i] = i;
//         }
      
//         // fill in the rest
//         for(var i = 1; i <= str2.length; i++){
//           var prev = i;
//           for(var j = 1; j <= str1.length; j++){
//             var val;
//             if(str2.charAt(i-1) == str1.charAt(j-1)){
//               val = row[j-1]; // match
//             } else {
//               val = Math.min(row[j-1] + 1, // substitution
//                              prev + 1,     // insertion
//                              row[j] + 1);  // deletion
//             }
//             row[j - 1] = prev;
//             prev = val;
//           }
//           row[str1.length] = prev;
//         }
      
//         return row[str1.length];
// }
