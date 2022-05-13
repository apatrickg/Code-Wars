/*Instructions
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// Solution
function bmi(weight, height) {
    let bMI = weight/(Math.pow(height,2));
    if (bMI <= 18.5){
      return 'Underweight'
    } else if (bMI <= 25.0){
      return 'Normal'
    } else if (bMI <= 30.0){
      return 'Overweight'
    } else{
      return "Obese"
    }
  }

// Test Cases
console.log(bmi(60,3.2));
console.log(bmi(30,2.4));
console.log(bmi(75,1.2));