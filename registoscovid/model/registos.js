var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var id_paciente = require('./doente')


var RegistoSchema =  new Schema({
    num_sequencial: {type: id_paciente}, 
    data_registo: {type: Date},
    temperatura: {type: Number},
    falta_de_ar: {type: String},
    dor_de_cabeca: {type: String},
    dor_muscular: {type: String},
    tosse: {type: String},
    diarreia: {type: String},
    olfato_paladar: {type: String},
    avaliacao_global: {type: String}
})


module.exports = mongoose.model('Registo', RegistoSchema)