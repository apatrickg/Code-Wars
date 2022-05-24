/*Instructions
************************
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

// Solution
function longest(s1, s2) {
    // your code
    
  //   P - 2 strings 
  //   R - longest string containing distinct letters
  //   E - longest("areythess","heifyrs")
  //   P - split 2 strings into arrays => combine into 1 string to make sure it is the longest => filter out dupes => sort and join to make string
    let s1Array = s1.split("");
    let s2Array = s2.split("");
    let combined = s1Array.concat(s2Array);
    
    return combined.filter((e,i) => {
      return combined.indexOf(e) === i
    })
    .sort()
    .join("");
}

//Test Cases
console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
console.log(longest("inmanylanguages", "theresapairoffunctions"))