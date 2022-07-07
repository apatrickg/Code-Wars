/* Instructions 
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

******************************
name + " plays banjo" 
name + " does not play banjo"
******************************
*/

// Solution
function areYouPlayingBanjo(name) {
    // Implement me
  //   P - string
  //   R - string
  //   E - banjo(Adam)
  //   p - split into array, grab first char, conditional
    let newString = name.split("");
    if (newString[0].toLowerCase() === 'r'){
      return newString.join("") + " plays banjo"
    }
    return newString.join("") + " does not play banjo"
}

// Test Cases
 console.log(areYouPlayingBanjo("Adam"));
 console.log(areYouPlayingBanjo("Paul"));
 console.log(areYouPlayingBanjo("Ringo"));