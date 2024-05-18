const mongoose = require("mongoose");

const sitterpaymentSchema =new mongoose.Schema({
Nameofthesitter:{
     type:String,
    trim:true

},
ageofthesitter:{
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
 IDofsitter:{

 type:String,
trim:true
},
sitterpayment:{

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
module.exports=mongoose.model("sitterpayment", sitterpaymentSchema)