const express = require("express");
const router = express.Router();

// import model
const Babymodels = require("../model/dashboardRoute");

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.post("/register's", async (req, res) => {
  try {
    const baby = new dashboardRoute(req.body);
    console.log();
   await baby.save();
    res.send("dashboard successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, dashboard not registered")
    console.log("Error regisitter's", error)
    
  }
 
});

module.exports = router;