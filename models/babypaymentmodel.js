const mongoose = require("mongoose");

const babypaymentSchema =new mongoose.Schema({
Nameofthebaby:{
     type:String,
    trim:true

},
ageofthebaby:{
    type:String,
    trim:true

},
periodofstay:{

type:String,
    trim:true
},

IDofchild:{
type:String,
 trim:true
},
contact:{
type:String,
 trim:true
 },
 address:{

 type:String,
 trim:true
 },
 IDofbaby:{

 type:String,
trim:true
},
babypayment:{

type:String,
trim:true
},
paymentdays:{

    type:String,
    trim:true
    },
    totalpayment:{

        type:String,
        trim:true
        },
        nameofpayer:{

            type:String,
            trim:true
            },
        Date:{

                type:String,
                trim:true
                },
                time:{

                    type:String,
                    trim:true
                    },
                    
                    
                        
})
module.exports=mongoose.model("babypayment", babypaymentSchema)