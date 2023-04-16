// Q1. Display all books that are available for issue.

// issueStatus : true -> already issued
// issueStatus : false -> available for issue

// let books = [
//   { id: 1, title: "The Road Ahead", author: "Bill Gates", issueStatus: true },
//   {
//     id: 2,
//     title: "Homo Sapiens",
//     author: "Yuval Noha Hararri",
//     issueStatus: false,
//   },
//   { id: 3, title: "The 5am Club", author: "Robin Sharma", issueStatus: false },
//   { id: 4, title: "Harry Potter", author: "J K Rowling", issueStatus: true },
//   { id: 5, title: "Narnia", author: "C S Lewis", issueStatus: false },
// ];

// for (let index = 0; index < books.length; index++) {
//   if (books[index].issueStatus == false) {
//     console.log(books[index].title);
//   }
// }

// books.forEach((book) => {
//   if (book.issueStatus == false) {
//     console.log(book.title);
//   }
// });

// books
//   .filter((book) => book.issueStatus == false)
//   .map((book) => console.log(book.title));

// Q2. Check if the user credentials match with the stored data. Return a "Login successful" or "Incorrect details" accordingly.
// Input : username -> jane123, password -> jane321
// let username = "john12323r23";
// let password = "john123";

// let users = [
//   {
//     id: 1,
//     name: "John",
//     username: "john123",
//     password: "john123",
//   },
//   {
//     id: 2,
//     name: "Jane",
//     username: "jane123",
//     password: "jane123",
//   },
//   {
//     id: 3,
//     name: "jenny",
//     username: "jenny123",
//     password: "jenny123",
//   },
//   {
//     id: 4,
//     name: "bob",
//     username: "bob123",
//     password: "bob123",
//   },
// ];

// let result = "";

// for (let index = 0; index < users.length; index++) {
//   if (users[index].username == username && users[index].password == password) {
//     result = "Login successful";
//     break;
//   } else {
//     result = "Invalid details";
//   }
// }

// console.log(result);
