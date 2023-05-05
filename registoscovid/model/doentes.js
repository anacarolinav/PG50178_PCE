var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var CodigoPostalSchema =  new Schema({
    cod_postal: {type:Number}, 
    localidade: {type: String}
})

var RegistoSchema =  new Schema({
    num_sequencial: {type: String, unique:true}, 
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

var DoenteSchema =  new Schema({
    id_paciente: {type:String, unique:true}, 
    nome: {type: String},
    data_nascimento: {type: String},
    genero: {type: String},
    cod_postal: {type: String},
    registos: [RegistoSchema]
})


module.exports = mongoose.model('DoenteSchema', DoenteSchema)
