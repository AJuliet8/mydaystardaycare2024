const express = require("express");
// const {appendfile} =require("fs")
const router = express.Router();
const passport =require ("passport")

router.get("/login",(req,res) =>{
    res.render("login")
})
router.post("/login",passport.authenticate("local",{failureRedirect:"/login"}),(req,res)=>{
    res.redirect("/dashboard")
});

router.get("/logout",(req,res)=>{
    if(req.session){
req.session.destroy((error)=>{
    if(error){
    return res.status(500).send("error loging out..")
    }
})
res.redirect("/dasboard");
    }

})

router.get("/",(req,res) =>{
    res.render("index")
})


module.exports = router;