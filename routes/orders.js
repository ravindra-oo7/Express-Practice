var express = require("express");

var router = express.Router();

// "/orders"
router.get('/',(req,res)=>{

    res.send("Get Request for Orders");

});

// "/orders/getOrder"
router.get('/getOrder',(req,res)=>{

    res.send("Get Request for Order");
});

module.exports = router;