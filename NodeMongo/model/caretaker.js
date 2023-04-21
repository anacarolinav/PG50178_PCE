var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var CareTakerSchema =  new Schema({
    id: {type:Number, unique:true}, 
    nome: {type: String}
})

module.exports = mongoose.model('careTaker', CareTakerSchema)