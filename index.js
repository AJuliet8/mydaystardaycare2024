const express = require("express");
const mongoose = require("mongoose");// for mongodb
const path = require("path");//for pug
const passport =require("passport") 
 const expressSession =require ("express-session");({
  secret:"secret",
  resave:false,
  saveUnitialized:false
 });
  require("dotenv").config();


 const registrationmodel =require("./models/registrationmodel")
 const dashboardmodel =require("./models/dashboardmodel")
//  const dashboard =require("./models/dashboardmodel")
const port = process.env.port || 4000  // listening to port
// importing routes
const sittersroute =require("./routes/sitterRoute");
const babiesreg =require("./routes/babiesreg");
const adminregistration =require("./routes/RegistrationRoute")
const AuthenticationRoute =require("./routes/AutheticationRoute")
const dashboardRoute =require("./routes/dashboardRoute")
const  newdollshopRoute =require("./routes/newdollshopRoute")
const app = express()
// intallations


// configguration

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
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


// // expressSesion configuration
//  app.use(expressSession);
// app.use(passport.initialize())
//  app.use(passport.session())
// // //   // passport configuration
//   passport.use(registrationmodel.createStrategy());
//   passport.serializeUser(registrationmodel.serializeUser());
//  passport.deserializeUser(registrationmodel.deserializeUser());


// // middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/", sittersroute);
app.use("/", babiesreg)
app.use("/",adminregistration)
app.use("/",AuthenticationRoute)
app.use("/",dashboardRoute)
app.use("/",newdollshopRoute)
// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

  //always the last line in the code!!!
app.listen(port, () => console.log(`listening on port ${port}`));
