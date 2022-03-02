const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    img:{type:String, required:true},
    title:{type:String,required:true},
    short_Summary:{type:String,required:true},
    content_Categary:{type:String,required:true},
    city:{type:String,required:true},
    auther:{type:String,required:true},
    time_to_read:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("article",articleSchema);