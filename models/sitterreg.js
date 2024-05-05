const mongoose = require("mongoose");

const sitterregSchema =new mongoose.Schema({
name:{
     type:String,
    trim:true

},
location:{
    type:String,
    trim:true

},
dob:{

type:Date,
    trim:true
},

gender:{
type:String,
 trim:true
},
nextofkin:{
type:String,
 trim:true
 },
 recommendername:{

 type:String,
 trim:true
 },
 religion:{

 type:String,
    trim:true
 },
    educationlevel:{

    type:String,
     trim:true
                    },
    sitternumber:{

    type:String,
    trim:true
},
                        contacts:{
                            type:Number,
                            trim:true

                        }
})
module.exports=mongoose.model("sitterreg", sitterregSchema)