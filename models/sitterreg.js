const mongoose = require("mongoose");

const sittersregSchema =new mongoose.Schema({
Name:{
     type:String,
    trim:true

},
location:{
    type:String,
    trim:true

},
DOB:{

type:String,
    trim:true
},

Gender:{
type:String,
 trim:true
},
Nextofkin:{
type:String,
 trim:true
 },
 recommendersname:{

 type:String,
 trim:true
 },
 Religion:{

 type:String,
                    trim:true
                },
                levelofeducation:{

                    type:String,
                        trim:true
                    },
                    sittersnumber:{

                        type:String,
                            trim:true
                        },
                        contact:{
                            type:String,
                            trim:true

                        }
})
module.exports=mongoose.model("sitter's reg", sittersregSchema)