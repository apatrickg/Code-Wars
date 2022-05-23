/*Instructions

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

*****************************************************************************

Note: a and b are not ordered!
*/

// Solution
function getSum( a,b )
{
   //Good luck!
//   P - 2 integers, positive or negative 
//   R - sum, including the numbers in the between the range 
//   E - getSum(1,2)
//   P - sort the numbers, hold sum of variables, set up total variable, return total variable 
  
  if (a === b){
    return a
  }
  let converted = new Array(a,b);
  let total = 0;
  let newArray = converted.sort((a,b) => {
    return a - b
  })
  
  let i = newArray[0]
  while (i <= newArray[1]){
    total+=i
    i++
  }
  return total
}

// Test Cases
console.log(getSum(-1,12));
console.log(getSum(0,5));
console.log(getSum(3,-4));