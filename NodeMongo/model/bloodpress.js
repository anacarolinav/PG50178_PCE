var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var bloodpressSchema =  new Schema({
    systolic: {type:Number}, 
    diastolic: {type: Number},
})

module.exports = mongoose.model('bloodpress', bloodpressSchema)