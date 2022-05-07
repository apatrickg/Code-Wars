/* Instructions
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// Solution
function positiveSum(arr) {
    //   if there is nothing just return sum
      if (arr.length === 0){
        return 0;
      } else {
        let sum = arr.filter(nums => nums >= 0);
        return sum.reduce((a,b)=> a + b,0);
      }
}

// Test Cases
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([3,4,-5,2]));