/*Instructions
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

// Solution
function digitize(n) {
    //code here
    let newArray = n.toString().split("").reverse();
    return newArray.map((e)=>{
      return Number(e);
    })
}

// Test Cases
console.log(digitize(2));
console.log(digitize(25678));
console.log(digitize(5739));