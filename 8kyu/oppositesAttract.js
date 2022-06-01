/*Instructions
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// Solution
function lovefunc(flower1, flower2){
    // moment of truth
  //   P - 2 numbers 
  //   R - boolean 
  //   E - lovefunc(1,4)
  //   P - flower 1 divisable by2/flower 2 not divisble by 2,
    
    return flower1 % 2 !== flower2 % 2
}

// Test Cases
console.log(lovefunc(1,4))
console.log(lovefunc(2,2))
console.log(lovefunc(0,1))