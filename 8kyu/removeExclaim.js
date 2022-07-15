/* Instructions 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// Solution
function removeExclamationMarks(s) {
    //   P - string
    //   R - string with exclamation point out 
    //   E - hey guys ! -> hey guys
    //   P - split into array, loop through chars for exclamation point, push into empty array -> join
      let newArray = s.split("");
      let emptyArray = [];
      for (let i = 0; i <= newArray.length; i++){
        if (newArray[i] !== '!'){
          emptyArray.push(newArray[i])
        }
      }
      return emptyArray.join("")
}

// Test Cases
console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello! Here we are! World!"));
console.log(removeExclamationMarks("Where is my boba?!"));