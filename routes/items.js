var express = require("express");

var router = express.Router();

// "/items/"
router.get('/',(req,res)=>{

    res.send("Get Request for Items");

});

// "/items/getItem"
router.get('/getItem',(req,res)=>{

    res.send("Get Request for Item");

});

module.exports = router;