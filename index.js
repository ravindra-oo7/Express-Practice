var express = require("express");

var app = express();

app.get("/getUsers",(req,res)=>{

    var users = [
                    {
                        userName : 'Ravi',
                        userId : 'oo7',
                        gender : 'male',
                        isEmployed : false
                    },
                    {
                        userName : 'Alok',
                        userId : 'oo8',
                        gender : 'male',
                        isEmployed : false
                    },
                    {
                        userName : 'Damaji',
                        userId : 'oo9',
                        gender : 'male',
                        isEmployed : false
                    },
                    {
                        userName : 'Rani',
                        userId : 'oo2',
                        gender : 'female',
                        isEmployed : true
                    }
                ] ;
    res.send(users);
});

app.post("/addUser",(req,res)=>{

    req.body.users;
    var users = req.body.users;

    res.send("UserAdded succesfully!!");
});

app.put("/updateUser",(req,res)=>{

    res.send("Resource Updated ");

});

app.delete("/deleteUser",(req,res)=>{

    res.send("User Deleted successfully");
});

app.listen(3000);

// If we do bussiness logic in single file it will hard to read,maintain and debug code 
// so we should use modular approach such that code with perticular functionality will go the perticular modiule
// it will lead to easy tracking and debugging the bugs in code
// For this we can use modular approach of coding using routing