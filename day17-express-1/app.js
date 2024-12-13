const express = require("express")

const app = express();

app.get("/",(req,res)=>{
 res.send("Hello word")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
   })

app.listen(3000,()=>{
    console.log("server is start in 3000")
}) 