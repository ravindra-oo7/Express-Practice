var express = require("express");

var router = express.Router();

// "/products"
router.get('/',(req,res)=>{

    res.send("Get Request for products");

});

// "/products/getProduct"
router.get('/getProduct',(req,res)=>{

    res.send("Get Request for product");
});

module.exports = router;