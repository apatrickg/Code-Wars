/*Instructions
Return the number (count) of vowels in the given string.

******************************************************************
We will consider a, e, i, o, u as vowels for this Kata (but not y).
******************************************************************

The input string will only consist of lower case letters and/or spaces.
*/

// Solution
function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here
  //   P - string
  //   R - return number of vowels present 
  //   E - getCount('abracdarbra')
  //   P - convert to array, convert elements to lowercase, increase count if vowel
    
    let vowelArray = str.split("");
    for (let i = 0; i < vowelArray.length; i++){
      vowelArray[i].toLowerCase();
      if (vowelArray[i].includes('a')){
        vowelsCount++
      }
       if (vowelArray[i].includes('e')){
        vowelsCount++
      }
       if (vowelArray[i].includes('i')){
        vowelsCount++
      }
       if (vowelArray[i].includes('o')){
        vowelsCount++
      }
       if (vowelArray[i].includes('u')){
        vowelsCount++
      }
    }
    return vowelsCount;
  }

//   Test Cases
console.log(getCount('owodoflr'));
console.log(summation('cbfght'));
console.log(summation('readyuwuowo'));