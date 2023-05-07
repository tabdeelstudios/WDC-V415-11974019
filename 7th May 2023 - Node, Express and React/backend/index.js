// npm init -y

// nodemon (npm install -D nodemon)
// express (npm install express)
// body-parser (npm install body-parser)

// npm install cors

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello there!" });
});

// Show 5 tasks on the /tasks route. Each task returns an ID, title and status.
app.get("/tasks", (req, res) => {
  res.json({
    tasks: [
      { id: 1, title: "Buy milk", status: "complete" },
      { id: 2, title: "Send email", status: "complete" },
      { id: 3, title: "Attend meeting", status: "complete" },
      { id: 4, title: "Plan the day", status: "complete" },
      { id: 5, title: "Watch a movie", status: "complete" },
    ],
  });
});

app.listen(port, () => {
  console.log("Server is running!");
});
