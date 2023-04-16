let person = {
  name: "John Doe",
  age: 54,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
  isMarried: true,
  languages: ["English", "Hindi", "Marathi"],
  displayDetails: function () {
    return (
      this.name +
      " lives in " +
      this.address.city +
      " and is " +
      this.age +
      " years old!"
    );
  },
  displayData: function (item) {
    if (this.hasOwnProperty(item) == true) {
      return this[item];
    } else {
      return null;
    }
  },
  updateData: function (item, newValue) {
    if (this.hasOwnProperty(item) == true) {
      this[item] = newValue;
      return true;
    } else {
      return false;
    }
  },
  deleteData: function (item) {
    if (this.hasOwnProperty(item) == true) {
      delete this.item;
      return true;
    } else {
      return false;
    }
  },
};

if (person.updateData("age", 70) == true) {
  console.log("Age updated! New age : " + person.displayData("age"));
} else {
  console.log("No such property exists. Something went wrong.");
}
let itemToBeDeleted = "age";
if (person.deleteData(itemToBeDeleted) == true) {
  console.log(itemToBeDeleted + " deleted!");
} else {
  console.log("No such property exists. Something went wrong.");
}
console.log(person.displayDetails());
console.log(person.displayData("languages"));

// person.isMarried = false;
// console.log(person);

// delete person.address;
// console.log(person);
