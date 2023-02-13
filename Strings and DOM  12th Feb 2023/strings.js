let content = "       hello there how\nare you         ";
console.log(content.length);
console.log(content.split(" "));
console.log(content.charAt(4));
let modified = content.trim();
console.log(content);
console.log(modified);

username = "John";
age = 70;
city = "Bangalore";

let output =
  "Hello " +
  username +
  "! You are " +
  age +
  " years old and you live in " +
  city +
  ".";

console.log(output);

// String literal / Template literal
let finalOutput = `Hello ${username}!
You are ${age} years old and you live in ${city}.`;

console.log(finalOutput);
