/*Instructions
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

// Solution
// return masked string
function maskify(cc) {
    //   P - string 
    //   R - string with last 4 chars but everything else is x
    //   E - maskify(22244222234)
    //   P - conditional if less 4 or less, just return string/slice to store last 4 digits/splice to delete+join/concat/join
    
      if (cc.length <= 4){
        return cc
      }
      
      let lastFour = cc.split('').slice(-4);
      let getConverted = cc.split("").slice(0,-4).map((e,i) => {
        return e[i] = '#'
      })
      return getConverted.concat(lastFour).join("")
}

// Test Cases
console.log(maskify('1'));
console.log(maskify(''));
console.log(maskify('445894509338'));