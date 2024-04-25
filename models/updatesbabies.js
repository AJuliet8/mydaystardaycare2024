const mongoose = require("mongoose");

const updatesbabiesSchema =new mongoose.Schema({
Name:{
     type:String,
    trim:true

},
gender:{
    type:String,
    trim:true

},
parentsname:{

type:String,
    trim:true
},

contactnumber:{
type:String,
 trim:true
},

                        
})
module.exports=mongoose.model("updatesbabies", updatesbabiesSchema)