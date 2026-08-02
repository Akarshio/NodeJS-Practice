const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
         firstname:{
            type: String,
            required: true,
         },
         lastname:{
            type: String,
         },
         gender:{
            type: String,
            enum: ["male" , "female" , "other"], 
            required: true,
         },
         email:{
            type: String,
            unique: true,
            required: true,
            unique: true

         },
         jobtitle:{
            type: String,
                     
         },
}, {timestamps: true})

const User  = mongoose.model('user', userSchema);

module.exports = {
    User,
}