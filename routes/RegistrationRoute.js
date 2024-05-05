const express = require("express");
const router = express.Router();

// import model
const registrationmodel = require ("../models/registrationmodel");

 router.get("/adminregistration", (req, res) => {
   res.render("adminregistration");

 });
// ``

router.post("/adminregistration", async (req, res) => {
    try {
      const user= new registrationmodel(req.body);
      console.log(user);
     await registrationmodel.register(user,req.body.password,(err) =>{
        if(err){
            throw err
        }
        res.redirect("/adminregistration")
    })
} catch (err) {
    res.status(400).send("user not adminregistration")
    console.log(error)
}
    
     });
     
     
  
  
  
  module.exports = router;