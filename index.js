var express = require("express")

var app = express()

app.get("/",(req, res)=>{
    res.send("oi")
})

app.listen(3000)