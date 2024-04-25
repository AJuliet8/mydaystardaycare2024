const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/sitterRoute");

router.get("/sitter ", (req, res) => {
  res.render("sitterreg");
});

router.post("/register's", async (req, res) => {
  try {
    const baby = new sittersroute(req.body);
    console.log();
   await baby.save();
    res.send("sitterreg successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, sitter'sreg not registered")
    console.log("Error regisitter's", error)
    
  }
 
});

module.exports = router;