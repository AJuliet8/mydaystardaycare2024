const express = require("express");
const router = express.Router();

// import model
const register = require("../model/register");

router.get("/adminreg", (req, res) => {
  res.render("adminreg");

});


router.post("/register", async (req, res) => {
    try {
      const adminreg= new register(req.body);
      console.log(user);
     await adminreg.adminreg(adminreg,req.body.password,(err) =>{
        if(err){
            throw err
        }
        res.redirect("./register")
    })
} catch (err) {
    res.status(400).send("user not register")
    console.log(error)
}
    
     });
     
     
  
  
  
  module.exports = router;