const express = require("express")
const app = express()
const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("Wel Come to Home Page")
})

app.get("/about",(req,res)=>{
    res.send("Wel Come to About Page")
})

app.get("/contact",(req,res)=>{
    res.status(200).send("Wel Come to Contact Page")
})

app.get("/test",(req,res)=>{
    res.send("Wel Come to test Page")
})

app.listen(PORT,()=>{
    console.log(`Server in run in ${PORT}`)
})