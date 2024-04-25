const mongoose = require("mongoose");

const babieslistSchema =new mongoose.Schema({
babiesName:{
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

parentsname:{
type:String,
 trim:true
},
location:{
type:String,
 trim:true
 },
 babyNumber:{

 type:String,
 trim:true
 },
 status:{

 type:String,
                    trim:true
                },
                action:{

                    type:String,
                        trim:true
                    },
                    
                        
})
module.exports=mongoose.model("Babieslist", babieslistSchema)