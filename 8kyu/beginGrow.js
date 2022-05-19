/* Instructions
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
*/

// Solution
function grow(x){
    return x.sort((a,b) => a-b).reduce((a,b) => {
      return a * b
    })
}

// Solutions
console.log(grow([1,3,5,2]))
console.log(grow([1,5,2]))
console.log(grow([1,3,2,6,9]))