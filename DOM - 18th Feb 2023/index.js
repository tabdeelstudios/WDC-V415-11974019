// Window Object
// let input = window.prompt("Enter your name : ");
// window.alert("Welcome back, " + input);
// window.location = "https://www.google.com";

// Date and Time
// let today = new Date();
// console.log(today.getDay());

// Print the date in the following format : 18-2-2023
// let output =
//   today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
// console.log(output);
// MM/DD/YYYY
// let date1 = new Date("01/05/2022 12:00:00");
// let date2 = new Date("02/15/2023 14:00:00");

// console.log(date2.getDay() - date1.getDay());

// Document Object Manipulation (DOM)
// let heading = document.getElementById("special");
// console.log(heading);
// heading.innerHTML = "<strike>This is new content</strike>";
// heading.style.backgroundColor = "yellow";
// let items = document.getElementsByClassName("listItem");
// console.log(items);
// let allElements = document.getElementsByTagName("p");
// console.log(allElements);
// let selection = document.querySelectorAll(".listItem");
// console.log(selection);

// let newHeading = document.createElement("h3");
// // <h3></h3>
// newHeading.innerText = "This is created by Javascript!";
// // <h3>This is created by Javascript!</h3>
// document.querySelector("body").appendChild(newHeading);
// // Display on the screen

// let newImage = document.createElement("img");
// <img src="">
// newImage.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
// );
// newImage.setAttribute("alt", "Beach Image");
// newImage.setAttribute("class", "imgClass");
// document.querySelector("body").appendChild(newImage);

// let heading = document.querySelector("h1");
// let headingID = heading.getAttribute("id");
// console.log(headingID);
