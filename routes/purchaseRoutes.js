const express = require("express");
const router = express.Router();
const multer =require("multer")


const purchasemodels = require("../models/purchasemodel");

router.get("/purchase", (req, res) => {
  res.render("addpurchase");
});

router.post("/purchase", async (req, res) => {

  try {
    const purchase= new purchase(req.body);
    console.log("baby....",purchase);
   await purchase.save();
   res.redirect("/purchaselist");
    res.send("babypayment successfully")
    
  } catch (error) {
    res.status(400).render("addpurchase",{title:"addpurchase"})
    console.log("Error purchase", error)
    
  }
 
});

// import model
const purchasemodels = require("../models/purchasemodel");

router.get("/purchase", (req, res) => {
  res.render("addpurchase");
});

router.post("/purchase", async (req, res) => {

  try {
    const purchase= new purchase(req.body);
    console.log("baby....",purchase);
   await purchase.save();
   res.redirect("/purchaselist");
    res.send("babypayment successfully")
    
  } catch (error) {
    res.status(400).render("addpurchase",{title:"addpurchase"})
    console.log("Error purchase", error)
    
  }
 
});

// get doll form
router.get("/adddoll",(req,res)=>{
    res.render("doll purchase")
})

module.exports = router;