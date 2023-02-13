// Objects
let person = {
  name: "John",
  age: 56,
  isEmployed: false,
  salary: 76888.0,
  installments: [1000, 1000, 1000, 1000],
};

console.log(person.installments[2]);

person.city = "Bangalore";
person.isEmployed = true;
console.log(person);

console.log(Object.keys(person).length);
console.log(Object.values(person));
