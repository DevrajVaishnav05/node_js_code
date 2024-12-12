const fs = require("fs")


// const data = fs.readFileSync("read.txt","utf-8")
// console.log(data)

// console.log("Hello Devraj App ks ho")



fs.readFile("read.txt","utf-8",(err , data ) =>{
    console.log(data)
})

console.log("Hello Devraj App Ks ho ")