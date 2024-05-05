const mongoose = require("mongoose");

const babiesregistrationSchema =new mongoose.Schema({
babyName:{
     type:String,
    trim:true

},
gender:{
    type:String,
    trim:true

},
age:{

type:String,
    trim:true
},

location:{
type:String,
 trim:true
},
personName:{
type:String,
 trim:true
 },
 timeOfArrival:{

 type:String,
 trim:true
 },
 parentsName:{

 type:String,
  trim:true
 },
fee:{
    type:String,
    trim:true
 },
    periodOfStay:{

    type:String,
    trim:true
},
    babyNumber:{
    type:String,
    trim:true

}
})
module.exports=mongoose.model("Babiesregistration", babiesregistrationSchema)