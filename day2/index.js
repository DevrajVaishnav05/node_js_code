const fs = require("fs");


// Create File 
// fs.writeFileSync('read.txt',"WelCome to new file")

// fs.writeFileSync('read.txt'," Hello Brother , WelCome  to new file")



fs.appendFileSync('read.txt', " \n How Are you I am fine thaku you :) \n")

const buf_data = fs.readFileSync('read.txt');

const org_data = buf_data.toString();

console.log(org_data)

// fs.renameSync('read.txt', 'readwrite.txt')