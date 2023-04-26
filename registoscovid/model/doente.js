var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var CodigoPostalSchema = require('./cod_postal')

var DoenteSchema =  new Schema({
    id_paciente: {type:String, unique:true, required: true}, 
    nome: {type: String},
    data_nascimento: {type: String},
    genero: {type: String},
    cod_postal: {type: String}
})

module.exports = mongoose.model('Doente', DoenteSchema)