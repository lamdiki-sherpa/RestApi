const mongoose = require('mongoose')

const RequestsSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:[20, 'name cannot be more than 20 character'],
        trim:true
        },
    category:{
        type:String,
        maxlength:[20,'category cannot be more than 20 character']
            },
    
          
    
    
})

module.exports = mongoose.model('Request', RequestsSchema)