var express = require("express");

var router = express.Router();

// "/users"
router.get('/',(req,res)=>{

    res.send("Get Request for User");

});

// "/users/getUsers"
router.get('/getUsers',(req,res)=>{

    res.send("Get Request for User");
});

module.exports = router;