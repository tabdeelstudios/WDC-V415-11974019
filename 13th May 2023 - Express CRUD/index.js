const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

let allReviews = [
  {
    id: 1,
    addedBy: "John",
    title: "This is a decent watch!",
    rating: 3,
  },
  {
    id: 2,
    addedBy: "Jenny",
    title: "This is a must watch!",
    rating: 5,
  },
  {
    id: 3,
    addedBy: "Smith",
    title: "This is a okayish watch!",
    rating: 4,
  },
];

// npm install -D nodemon
// npm install body-parser express
app.get("/", (req, res) => {
  res.json(allReviews);
});

app.post("/add", (req, res) => {
  let newReview = req.body;
  console.log(newReview);
  allReviews.push(newReview);
  res.json({ message: "Review added!" });
});

app.patch("/update/:id", (req, res) => {
  let reviewID = parseInt(req.params.id);
  console.log(reviewID);
  let updateTitle = req.body.title;
  console.log(req.body);
  let index = allReviews.findIndex((review) => review.id === reviewID);
  let originalReview = allReviews[index];
  originalReview.title = updateTitle;
  console.log(originalReview);
  allReviews[index] = originalReview;
  res.json({ message: "Review updated!" });
});

app.delete("/delete/:id", (req, res) => {
  let reviewID = parseInt(req.params.id);
  console.log(reviewID);
  let index = allReviews.findIndex((review) => review.id === reviewID);
  console.log(index);
  allReviews.splice(index, 1);
  res.json({ message: "Review deleted!" });
});

app.get("/:id", (req, res) => {
  res.json(
    allReviews.filter(
      (review) => parseInt(review.id) === parseInt(req.params.id)
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// {
//     "id":2,
//     "addedBy":"Jenny",
//     "title":"This is a must watch!",
//     "rating":5
//   }
