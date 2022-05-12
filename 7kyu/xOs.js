/*Instructions
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

// Solution
function XO(str) {
    //code here
//   P - string 
//   R - boolean (T/F) if same amount of X/O
//   E - XO(oooxo)
//   P - Convert to array, change chars to lowercase, variables to hold X/O, set conditionals
    
    let xoArray = str.split("");
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < xoArray.length; i++){
      if(xoArray[i].toLowerCase() === 'o'){
        oCount++;
      } 
      if (xoArray[i].toLowerCase() === 'x'){
        xCount++;
      } 
    }
  return oCount === xCount? true:false
}

// Test Cases
console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));