/* Instructions
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// Solution
function findShort(s){
    //   P - strings
    //   R - return lowest length (number) of string in series
    //   E - findShort("walk the dog")
    //   P - split into array, check length of each word, hold data for lowest, return lowest 
      
    let newArray = s.split(" ")
    let min = newArray[0]
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i].length < min.length){
        min = newArray[i];
        }
    }
      return min.length
 }

//  Test Cases
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(findShort('when will it reach the top'));
console.log(findShort('how many leaves are in that tree'));