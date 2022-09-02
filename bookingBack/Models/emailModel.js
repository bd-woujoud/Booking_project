const mongoose=require('mongoose')
const userModel = require('./userModel')
const Schema = mongoose.Schema

const emailSchema =new Schema({

    voyageur: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message:{

        type:String,
        required:true
    }

},

{timestamps:true})

module.exports=mongoose.model('email',emailSchema) 