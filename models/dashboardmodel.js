const mongoose = require("mongoose");

const dashboardSchema =new mongoose.Schema({
babiesregistration:{
     type:String,
    trim:true

},

sittersregistration:{
    type:String,
   trim:true
},

payment:{
    type:String,
   trim:true
},
newdollshop:{
    type:String,
   trim:true
}


})
module.exports=mongoose.model("dashboard", dashboardSchema)