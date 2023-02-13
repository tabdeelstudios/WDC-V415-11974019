// // Arrays

// let person = ["Hair Care", "Body Care", "Kids", "Men", "Women"];
// console.log(person[0]);

// // Print the last element of the array without specifying direct index
// console.log(person[person.length - 1]);

// person.push(56000.0);
// console.log(person);

// person.pop();
// console.log(person);

// person.unshift(56000.0);
// console.log(person);

// person.shift();
// console.log(person);

// delete person[2];
// console.log(person);

// let personName = person.slice(0, 2);
// console.log(personName);

// person.splice(2, 1, "New 1", "New 2");
// console.log(person);

// person.sort().reverse();
// console.log(person);

// let transaction = [
//   [1000, 600],
//   [1000, 500],
//   [1500, 750],
// ];

// // console.log(transaction[0][0]);

// let person = ["john", 56, { city: "Mumbai", pin: 444444 }, true];
// console.log(person[2].city);

let products = [
  {
    id: 1,
    productName: "Body lotion",
    price: 5000,
  },
  {
    id: 2,
    productName: "Skin lotion",
    price: 500,
  },
  {
    id: 3,
    productName: "Body Wash",
    price: 2000,
  },
];

products.forEach((item) => {
  console.log(item.productName);
});
