var mongoose=require('mongoose');
var Schema = mongoose.Schema;


const {v4:uuidv4} = require ('uuid');

var bloodpressSchema =  new Schema({
    systolic: {type:Number}, 
    diastolic: {type: Number},
})


var ClinicalSchema =  new Schema({ 

    clinicalInfoID: {type:Number, unique:true, required: true, default:uuidv4},
    admdate: {type: Date},
    bed: {type: String},
    bodytemp: {type: Number},

    bloodpress: {type: bloodpressSchema},
    bpm: {type: Number},
    sato2: {type: Number},
    
},{timestamps: true})

module.exports = mongoose.model('clinicalInfo', ClinicalSchema)