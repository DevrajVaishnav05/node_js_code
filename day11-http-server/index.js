const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello from the others sides devraj ji ");
    }
    else if (req.url == "/about") {
        res.end("Hello from the others About devraj ji ");
    }
    else if (req.url == "/contact") {
        res.end("Wel come to contact  ");
    }
    else if (req.url == "/test") {
        res.end("welcome to tast page ");
    }
    else if (req.url == "/error") {
        res.end(" Error Page ");
    }else {
        res.writeHead(404,{"content-type":"text/html"})
        res.end(" <H1> Error 404 </H1>");

    }
    console.log(req.url)
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is start in port 3000")
})