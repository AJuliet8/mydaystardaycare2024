const express = require("express");
// const {appendfile} =require("fs")
const router = express.Router();
const passport =require ("passport")

router.get("/login",(req,res) =>{
    res.render("index")
})
router.post("/login",passport.authenticate("local",{failureRedirect:"/index"}),(req,res)=>{
    res.redirect("/index")
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
module.exports = router;