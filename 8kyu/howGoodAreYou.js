/*Instructions
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

// Solution
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
  //   P - array, your points
  //   R - boolean T/F
  //   E - betterThanAverage([2,3],5)
  //   P - reduce to get avg -> compare with point value 
    let classAvg = classPoints.reduce((pv,cv) => {
      return pv + cv/classPoints.length
    },0);
    return classAvg < yourPoints ? true : false
}

// Test Cases
consol.log(betterThanAverage([2, 3]));
consol.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88]));
consol.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88]));
