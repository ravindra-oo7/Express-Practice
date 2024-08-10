var express = require("express");

var router = express.Router();

// "/reviews"
router.get('/',(req,res)=>{

    res.send("Get Request for reviews");

});

// "/reviews/getReview"
router.get('/getReview',(req,res)=>{

    res.send("Get Request for review");
});

module.exports = router;