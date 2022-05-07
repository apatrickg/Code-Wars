/*Instructions
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

// Solution
function squareSum(numbers){
    return numbers.map((e) => Math.pow(e,2)).reduce((pV,cV) =>{
      return pV + cV;
    },0)
}

// Test Cases
console.log(squareSum([1,2]));
console.log(squareSum([0,3,4,5]));
console.log(squareSum([]));
