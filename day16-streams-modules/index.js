const fs = require("fs");
const http = require("http");


// server.on("request", (req, res) => {
//   fs.readFile("read.txt", (err, data) => {
//     res.end(data.toString());
//   });
// });
const server = http.createServer((req,res)=>{


const rstream = fs.createReadStream("read.txt")
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",()=>{
        res.end("File Not found");
    });
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port 3000");
});
