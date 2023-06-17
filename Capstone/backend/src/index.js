require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Member = require("./data/models/MemberModel");

const app = express();

mongoose.connect(process.env.MONGODB_STRING);

// const teamMember = new Member({
//   name: "Sarah",
//   profilePic:
//     "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80",
//   designation: "IT",
// });

// teamMember.save().then(() => console.log("Added!"));

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
