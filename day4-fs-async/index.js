const fs = require("fs");

// fs.writeFile("read.txt", "Today is an awesome day", (err) => {
// });

fs.appendFile("read.txt","\n Hello Devraj Vaishanv",(err)=>{
    console.log(err)
})

fs.readFile("read.txt","utf-8",(err, data) =>{
    console.log(data)
})