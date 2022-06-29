/* Instructions 
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

// Solution
function rentalCarCost(d) {
  // Your solution here
//   P - integer
//   R - integer with amont after code 
//   E - rCc(2) -> should return 80
//   P - price to hold base for vacay, boolean for 7 or more and more than 3 else with 20
  let price = 40;
  if (d >= 7){
    return (d * price) - 50;
  } else if (d >= 3){
    return (d * price) - 20;
  } else{
    return d * price
  }
}

// Test Cases
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));