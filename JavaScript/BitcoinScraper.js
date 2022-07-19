const request = require("request"),
  app = require("http");

app
  .createServer(function (req, res) {
    request("https://blockchain.info/de/ticker", (error, response, body) => {
      const data = JSON.parse(body);
      value =
        "$" + (parseInt(data.THB.buy, 10) + parseInt(data.THB.sell, 10)) / 2;

      res.end(value);
    });
  })
  .listen(8080);