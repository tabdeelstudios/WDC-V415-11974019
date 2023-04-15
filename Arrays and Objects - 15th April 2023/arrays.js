// let userDetails = ["John", "Bob", "Jane", "Alice"];
// userDetails.push("Lucy");
// userDetails.unshift("Leo");
// let currentUser = userDetails[0];
// userDetails[2] = "Bobbie";
// console.log(userDetails.length);
// console.log(currentUser);
// console.log(userDetails);
// let poppedItem = userDetails.pop();
// console.log(userDetails);
// console.log(poppedItem + " removed!");
// console.log(userDetails);
// let shiftedItem = userDetails.shift();
// console.log(userDetails);
// console.log(shiftedItem + " removed!");

// delete userDetails[2];
// console.log(userDetails);

// let allPara = document.getElementsByTagName("p");
// console.log(allPara[0].innerText + allPara[allPara.length - 1].innerText);

// Create a variable which combines the content of first and last paragraph and print it in the console

// let currentYear = new Date().getFullYear();

// let copyrightText = "Copyright " + currentYear;
// allPara[allPara.length - 1].innerHTML = copyrightText;

// console.log(typeof allPara);

// let userDetails = [
//   ["John", "Carter"],
//   ["Bob", "Navy"],
//   ["Jane", "Austin"],
//   ["Alice", "Swift"],
// ];

// let temp = userDetails.flat();
// console.log(temp[temp.length - 1]);

// Create an input field where the user can enter a task
// Create an Add task button which adds a task to the bottom of the list
// let list = [];

// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//   list.push(document.getElementById("inputValue").value);
//   console.log(list);
//   document.getElementById("inputValue").value = "";
// });

// Create a delete task button which removes the first task from the list
// document.getElementsByTagName("button")[1].addEventListener("click", () => {
//   list.shift();
//   console.log(list);
// });

// Display items in the console
// -----------------------------
// loop through the array
//     for each item
//         compare smallest with the current value
//             if smallest is greater than current value -> swap
//             otherwise continue

// Discounts -> Out of all products, the least expensive is free

// let cart = [500, 600, 400, 800, 700];

// Assume the first index is the smallest value
// let smallest = cart[0];

// let totalPrice = 0;
// ---------------------------------
// for (let index = 1; index < cart.length; index++) {
//   if (smallest > cart[index]) smallest = cart[index];
//   else continue;
// }

// for (let index = 0; index < cart.length; index++) {
//   totalPrice += cart[index];
// }

// let finalPrice = cart.reduce((temp, current) => temp + current, totalPrice);

// console.log(smallest);
// console.log("Original Price : " + finalPrice);
// console.log("Discounted Price : " + (finalPrice - smallest));

// Display the least expensive item and the final price
// Original Price : 1200
// Discounted Price : 1000

// ---------------------------------
// console.log(Math.min(...cart));
// ---------------------------------
// console.log(
//   cart.sort(function (a, b) {
//     return a - b;
//   })[0]
// );
// ---------------------------------

// Reversing an array
let values = [500, 600, 400, 800, 700];

let newArray = [];
for (let index = values.length - 1; index > -1; index--) {
  newArray.push(values[index]);
}

console.log(newArray);
