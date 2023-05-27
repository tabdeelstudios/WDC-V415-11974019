require("dotenv").config();

const { CourseModel } = require("./models/CourseModel");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const uri = process.env.mongodbString;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/courseList", async (req, res) => {
  let allCourses = await CourseModel.find({});
  res.json(allCourses);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose.connect(uri);
});
