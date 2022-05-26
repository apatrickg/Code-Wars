/*Instructions 
***********************
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// Solution
function friend(friends){
    //   your code here
    //   P - list of strings
    //   R - list with items only with 4 in length and in original order
    //   E - friend([...])
    //   P - split string into array/filter through for elements length equal to 4
      
      return friends.filter((e) => {
        return e.length === 4
      })
}

// Test Cases
console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))