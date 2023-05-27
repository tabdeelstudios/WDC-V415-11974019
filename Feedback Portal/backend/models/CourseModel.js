const { model } = require("mongoose");
const { TechCourse } = require("../schemas/CourseSchema");

const CourseModel = new model("Course", TechCourse);

module.exports = { CourseModel };
