const { Schema } = require("mongoose");

const TechCourse = new Schema({
  title: String,
  price: String,
  duration: String,
  category: String,
  courseImg: String,
});

module.exports = { TechCourse };
