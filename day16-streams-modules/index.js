const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("read.txt", (err, data) => {
    res.end(data.toString());
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port 3000");
});
