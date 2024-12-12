const fs = require("fs")

const bioData ={
    name:"Devraj",
    age:20,
    Work:"Software Developer"
}

const jsonData = JSON.stringify(bioData);

// fs.writeFile("read.json", jsonData,(err)=>{
// console.log("Done")
// })


fs.readFile("read.json","utf-8",(err,data)=>{
const orgData = JSON.parse(data)
console.log("Json Data", data)
console.log("obj Data", orgData)
})
