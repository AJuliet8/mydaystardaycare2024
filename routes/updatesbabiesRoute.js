const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/updatesbabiesRoute");

router.get("/updatesbabies", (req, res) => {
  res.render("updatesbabies");
});

router.post("/updatesbabies", async (req, res) => {
  try {
    const baby = new sittersroute(req.body);
    console.log();
   await updatesbabies.save();
    res.send("updatesbabies successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, updatesbabies not registered")
    console.log("Error updatesbabies", error)
    
  }
 
});

module.exports = router;