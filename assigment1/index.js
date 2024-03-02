const fs = require("fs");

const http = require("http");

// console.log("run");

// fs.mkdirSync("new")
// fs.writeFileSync("new/index.js", "const sum = 'fareed' ");

// const res = fs.readFileSync("new/index.js","utf-8")

// console.log(res);

const server = http.createServer((req, res) => {
  return res.end("server is run");
});

server.listen(5000);
