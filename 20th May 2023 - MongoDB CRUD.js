// npm install body-parser cors mongoose express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aquibajanikh:aquibajanikh@cluster0.o2wx3d0.mongodb.net/myEventData?retryWrites=true&w=majority"
);

let allEvents = [
  {
    name: "Birthday",
    seats: 10,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Buffet Breakfast",
    seats: 6,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  },
  {
    name: "Movie",
    seats: 3,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
  },
  {
    name: "Buffet Lunch",
    seats: 0,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
  },
  {
    name: "Buffet Dinner",
    seats: 20,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
  },
];

// const Book = mongoose.model("Book", {
//   title: String,
//   price: Number,
//   author: {
//     firstName: String,
//     lastName: String,
//     salutation: String,
//   },
//   description: String,
//   noOfPages: Number,
//   inStock: Boolean,
// });

const Event = mongoose.model("Event", {
  name: String,
  seats: Number,
  image: String,
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/addEvents", function (req, res) {
  allEvents.forEach((event) => {
    let newEvent = new Event({
      name: event.name,
      seats: event.seats,
      image: event.image,
    });

    newEvent.save();
  });
  res.send("Done!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ---------------------------------
// Add a new book
// app.get("/addBook", (req, res) => {
//   const newBook = new Book({
//     title: "Angels and Demons",
//     price: 500,
//     author: {
//       firstName: "Dan",
//       lastName: "Brown",
//       salutation: "Mr.",
//     },
//     description: "Best book ever!",
//     noOfPages: 550,
//     inStock: true,
//   });

//   newBook.save().then(() => res.send("Book added"));
// });

// Display all books (/books)
// app.get("/books", async function (req, res) {
//   res.json(await Book.find({}));
// });

// Display all books by any one author (/author)
// app.get("/author", async function (req, res) {
//   res.json(await Book.find({ "author.firstName": "Dan" }).exec());
// });

// Display one book by ID (/bookID)
// app.get("/bookID", async function (req, res) {
//   res.json(await Book.findById("646852659dfc0412d91efc9e").exec());
// });

// Update one book by ID(/updateBook)
// app.get("/updateBook", async function (req, res) {
//   res.json(
//     await Book.findByIdAndUpdate("646852659dfc0412d91efc9e", {
//       $set: { price: 1000 },
//     }).exec()
//   );
// });

// Delete one book by ID(/deleteBook)
// app.get("/deleteBook", async function (req, res) {
//   res.json(await Book.findByIdAndDelete("646851adaecc1c214dbe4d7d").exec());
// });
