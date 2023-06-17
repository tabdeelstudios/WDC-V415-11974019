const mongoose = require("mongoose");

const Member = mongoose.model("Member", {
  name: String,
  profilePic: String,
  designation: String,
});

module.exports = Member;
