const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/babyreg");

router.get("/registerBaby", (req, res) => {
  res.render("babiesregistration");
});

router.post("/registerBaby", async (req, res) => {
  try {
    const baby = new Application(req.body);
    console.log();
   await baby.save();
    res.send("Baby registered successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, baby not registered")
    console.log("Error registering baby", error)
    
  }
 
});

module.exports = router;