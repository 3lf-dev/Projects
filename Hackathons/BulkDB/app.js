const express = require("express")
const J = express()
const PORT = 8000
const { Console } = require("console");
const fs = require("fs")
const db = Console({
  stdout: fs.createWriteStream("info.Jdb"),
});
let isValid = false

J.get('/', (req, res) => {
  res.send('Welcome to the database!')
})

// Create new user
J.get('/adduser', (req, res) => {
  if (req.query.token === 'joshdbtest') {
    if (req.query.user === "undefined") {
      res.end("You need to specify a username")
    } else if (req.query.pass === "undefined") {
      res.end("You need to specify a password")
    } else {
      //req.query.user + ":" + req.query.pass +
      db.log(req.query.user + ":" + req.query.pass)
      function end() {
        res.end("Data sent to db!")
      }
      end()
    }
  } else {
    res.end("You need to specify a valid password.")
  }
})

J.get('/checkPass', (req, res) => {
  if (req.query.user === "") {
    res.end("You need to specify a valid username!")
  }
  if (req.query.pass === "") {
    res.end("You need to specify a valid password!")
  }
  function lookUp(data) {
    var LineByLineReader = require('line-by-line'),
      lr = new LineByLineReader('info.Jdb');

    lr.on('error', function(err) {
      // 'err' contains error object
    });

    lr.on('line', function(line) {
      if (line === data) {
        isValid = true
      }
    });

    lr.on('end', function() {
      // All lines are read, file is closed now.
    });
  }
  // here
  lookUp(req.query.user + ":" + req.query.pass)
  function checkValid() {
    console.log(isValid)
  }
  checkValid()
  isValid = false
})

J.listen(PORT, function(err) {
  if (err) console.log("There is a server error!")
  console.log("Server listening on Port", PORT);
})
