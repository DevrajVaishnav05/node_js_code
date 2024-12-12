const fs = require("fs");

// asyn to create Folder 
fs.mkdir("myFolder",(err)=>{
    console.log("all Woring")
})

// Asyn to create file 
fs.writeFile('myFolder/read.txt','Wel Come to my new project ',(err)=>{

})



// Async to Add Multiple data
fs.appendFile('myFolder/read.txt',' \n read update cvalue in project project ',(err)=>{

})


// Async To file data read
fs.readFile("myFolder/read.txt","utf-8",(err,data)=>{
    console.log(data)
})

// Async to file name chnage 
fs.rename("myFolder/read.txt","myFolder/readandwrite.txt",(err)=>{
})

// Async to file Delete 
// fs.unlink("myFolder/readandwrite.txt",(err)=>{

// })
