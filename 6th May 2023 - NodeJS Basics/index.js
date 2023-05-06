var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    fs.writeFile("userDetails.txt", "", function (err) {
      if (err) throw err;
      console.log("Created!");
    });

    fs.appendFile("userDetails.txt", "This is new text", function (err) {
      if (err) throw err;
      console.log("Updated!");
    });

    fs.rename("firstName.txt", "newName.txt", function (err) {
      if (err) throw err;
      console.log("Renamed!");
    });

    fs.readFile("userDetails.txt", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      if (err) throw err;
      res.write(data);

      fs.unlink("userDetails.txt", function (err) {
        if (err) throw err;
        console.log("Deleted!");
      });

      return res.end();
    });
  })
  .listen(8000);

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Hello from the " + req.url + " !</h1>");
//     res.end();
//   })
//   .listen(8000);
