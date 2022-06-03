/*Instructions
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

// Solution
function filter_list(l) {
    // Return a new array with the strings filtered out
  //   P - list of integer/strings
  //   R - sorted out the integers in new list
  //   E - fL([1,a,5,b] => return [1,5])
  //   P- filter -> typeof(n)? =>return numbers
    return l.filter((e) =>{
      return typeof(e)  ==='number'
    })
}

// Test Cases
console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))