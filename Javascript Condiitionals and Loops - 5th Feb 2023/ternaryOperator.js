isLoggedIn = true;

salary = 50000.00;
isEmployed = false;
// condition ? what happens if true : what happens if false;
(isEmployed && salary>35000.00) ? console.log("Logged in") : console.log("Not logged in");

(isEmployed || salary>35000.00) ? console.log("Logged in") : console.log("Not logged in");

(!isEmployed) ? console.log("Logged in") : console.log("Not logged in");

// >, >=, <, <=, ==, ===, !=