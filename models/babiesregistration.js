const mongoose = require("mongoose");

const babiesregistrationSchema =new mongoose.Schema({
babyName:{
     type:String,
    trim:true

},
dob:{
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
serviceType:{
    type:Number,
    trim:true
 },
    periodOfStay:{

    type:String,
    trim:true
},
    babyNumber:{
    type:String,
    trim:true

},

contact:{
    type:String,
    trim:true

},
personTaking:{
    type:String,
    trim:true

},
status:{
    type:String,
    trim:true
    

}
})
module.exports = mongoose.model("Babiesregistration", babiesregistrationSchema)