// function calculateDiscount(finalBill) {
//   let discount = 0;
//   if (finalBill >= 10000.0) {
//     discount = 10;
//   } else if (finalBill >= 5000.0) {
//     discount = 5;
//   } else if (finalBill >= 2500.0) {
//     discount = 2;
//   } else {
//     discount = 0;
//   }
//   return discount;
// }

// function calculateFinalPrice(billAmount, finalDiscount) {
//   return billAmount - (billAmount * finalDiscount) / 100;
// }

// let totalDiscount = calculateDiscount(8000.0);
// let finalBillAmount = calculateFinalPrice(8000.0, totalDiscount);
// console.log(
//   "The total discount applied is : " +
//     totalDiscount +
//     "% and your final bill amount is : " +
//     finalBillAmount
// );

// Write a function that displays the day of the week
// 0-Sunday
// 1-Monday
// ... 6-Saturday

// 1. Declare the function
// function displayDay(dayNumber) {
//   // 2. Define the function
//   let today;
//   switch (dayNumber) {
//     case 0:
//       today = "Sunday";
//       break;
//     case 1:
//       today = "Monday";
//       break;
//     case 2:
//       today = "Tuesday";
//       break;
//     case 3:
//       today = "Wednesday";
//       break;
//     case 4:
//       today = "Thursday";
//       break;
//     case 5:
//       today = "Friday";
//       break;
//     case 6:
//       today = "Saturday";
//       break;
//     default:
//       today = "Invalid number";
//   }
//   return today;
// }
// 3. Call the function
// console.log(displayDay(0));
// console.log(displayDay(3));
// console.log(displayDay(9));

// let today = function () {};
// today();

// let tomorrow = () => {};
// tomorrow();
// username = "John";
// city = "Mumbai";
// let output = `Hi, I am  and I "live" in ${city}`;
// console.log(output);

// function sayHello() {
//   console.log("Hello");
//   sayHello();
// }

// sayHello();

function calculateFactorial(number) {
  if (number == 1) return 1;
  else return number * calculateFactorial(number - 1);
}

console.log(calculateFactorial(5));
