require("dotenv").config();

const { CourseModel } = require("./models/CourseModel");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const uri = process.env.mongodbString;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

const User = require("./schemas/UserSchema");

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.get("/courseList", async (req, res) => {
  let allCourses = await CourseModel.find({});
  res.json(allCourses);
});

app.get("/courseDetails/:id", async (req, res) => {
  let courseData = await CourseModel.findById(req.params.id).exec();
  res.json(courseData);
});

app.post("/courseFeedback/:id", async (req, res) => {
  const doc = await CourseModel.findById(req.params.id);
  doc.feedback.push(req.body);
  await doc.save();
  res.end();
});

app.post("/register", function (req, res) {
  User.register(
    new User({ email: req.body.email, username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: " + err,
        });
      } else {
        req.login(user, (er) => {
          if (er) {
            res.json({ success: false, message: er });
          } else {
            res.json({ success: true, message: "Your account has been saved" });
          }
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          res.json({
            success: true,
            message: "Authentication successful",
          });
        }
      }
    })(req, res);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose.connect(uri);
});
