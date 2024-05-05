const express = require("express");
const router = express.Router();
;
// import model
const dashboardmodels = require("../models/dashboardmodel");

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.post("/dashboard", async (req, res) => {
  try {
    const dashboardRoute= new dashboardRoute(req.body);
    console.log();
   await dashboard.save();
    res.send("dashboard successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, dashboard not registered")
    console.log("Error dashboard", error)
    
  }
 
});

module.exports = router;