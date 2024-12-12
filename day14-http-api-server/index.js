const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    const data=  fs.readFileSync("userapi.json")
   const objData = JSON.parse(data)

    if (req.url == "/") {
        res.end("Hello from the others sides devraj ji ");
    }
    else if (req.url == "/userapi") {
        res.writeHead(404,{"content-type":"application/json"})
        // res.end(`<h1>${ objData[1].name}</h1>`);
        res.end( objData[1].name);
    }else {
        // res.writeHead(404,{"content-type":"text/html"})
        res.end(" <H1> Error 404 </H1>");
    }
    console.log(req.url)
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is start in port 3000")
})