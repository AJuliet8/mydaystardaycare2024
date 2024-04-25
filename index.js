const express = require("express");
const mongoose = require("mongoose");// for mongodb
const path = require("path");//for pug
require("dotenv").config();

const port =  4000;
// importing routes
const babyRoutes = require("./routes/register")
const sittersroute =require("/routes/sitter's")
// const contactRoutes = require("./routes/")
const register = require("./model/register");
const sittersreg =require("./model/sittersreg");

const app = express()
// intallations


// configguration
 
mongoose.connection
  .once("open", () => {
   console.log("Mongoose connection open");
 })

  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
});
  // Set view engine as pug
app.set("view engine","pug");//setting the view engine to pug
app.set("views",path.join(__dirname,"views"));
  // middle wareapp.
app.use(express.static(path.join(__dirname,"public")))//set directory for static files

// // middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// Routes
app.get("/babiesregistration",(req,res)=>{
  res.render("babiesregistration") });
  app.get("/regisitter's",(req,res)=>{
    res.render("regsitter's") });
    app.get("/payment",(req,res)=>{
      res.render("payment") });
      app.get("/dashboard",(req,res)=>{
        res.render("dashboard") });
// useimported routes
app.use("/register", registrationRoutes);
app.use("/regisitter's", sittersRoute);
// app.use("/",contactRoutes);


//for invalid routes
app.get("*", (req, res) => {
  res.json({message:"babiesregistration",});
});
app.use


// bootstrapping server

//always be the last comment

app.listen(port, () => console.log(`App listening on port ${port}`));
