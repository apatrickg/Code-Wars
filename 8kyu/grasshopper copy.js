/* Instructions
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.*/

// Solution
var summation = function (num) {
    // Code here
    let total = 0;
    for (let i = 1; i <= num; i++){
      total = total + i;
    }
    return total;
  }

//   Test Cases
console.log(summation(1));
console.log(summation(8));
console.log(summation(7));