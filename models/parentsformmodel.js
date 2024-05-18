const mongoose = require("mongoose");

const parentsformSchema =new mongoose.Schema({
FirstName:{
     type:String,
    trim:true

},
LastName:{
    type:String,
    trim:true

},
Email:{

type:String,
    trim:true
},

phone:{
type:String,
 trim:true
},
ChildName:{
type:String,
 trim:true
 }
 
});
module.exports=mongoose.model("parentsform", parentsformSchema)