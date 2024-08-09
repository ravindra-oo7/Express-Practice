var express = require("express");

var app = express();

app.get("/getHello",(req, res)=>{
    res.send("Hello Ravi");
});

app.listen(3000);