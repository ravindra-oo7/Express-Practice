var express = require("express");

var router = express.Router();

//Middleware
router.use('/',(req,res,next)=>{

    req.headers["content-type"] = 'application/json';
    console.log("API call Received");
    next();
});

router.get('/',(req,res,next)=>{
    
    res.send("Headers Recevied"+ req.headers["content-type"]);
    res.send("Get Request for Users");
    next();
});

router.use('/',(req,res)=>{
    
console.log("API Call Ended");
});



// "/users"
router.get('/',(req,res)=>{

    res.send("Get Request for User");

});

// "/users/getUsers"
router.get('/getUsers',(req,res)=>{

    res.send("Get Request for User");
});

// "/users/getUser/5"
router.get('/getUser/:id([0-9]{3})',(req,res)=>{

    res.send("User of Id "+req.params.id+" Found");
});

// passing two parameters
// "/users/getUser/MH/Nagpur"
router.get('/getUser/:state/:city',(req,res)=>{

    res.send("User from "+req.params.state+" state "+req.params.city+" city found");
});

// allowing only  a-z A-Z in parameters 
// "/users/getUser/name"
router.get('/getUser/:name([a-zA-Z]{5})',(req,res)=>{

    res.send("User from "+req.params.name+" found");
});

router.get('*',(req,res)=>{

    var resObj = {
        statusCode:404,
        statusMsg:"URL not found"
    } 

    res.status(404).send(resObj);
});


module.exports = router;