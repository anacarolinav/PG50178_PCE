var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var CodigoPostalSchema =  new Schema({
    cod_postal: {type:Number}, 
    localidade: {type: String}
})

module.exports = mongoose.model('CodigoPostal', CodigoPostalSchema)