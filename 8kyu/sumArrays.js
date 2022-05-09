/* Instructions 
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

// Solution
function sum (numbers) {
    "use strict";
//   P - array
//   R - sum of numbers 
//   E - sum[3,1,2,5] should return single integer
//   P - set up conditional if arr does not contain number
  
  if(numbers.length === 0){
    return 0
  }

  return numbers.reduce((a,b) => {
    return a + b;
  },0)
};

// Test Cases
console.log(sum([1,2]));
console.log(sum([0,3,4,5]));
console.log(sum([-3,4,1]));
