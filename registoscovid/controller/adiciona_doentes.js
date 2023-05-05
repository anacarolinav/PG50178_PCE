let DoenteSchema = require('../model/doentes');


module.exports.newDoente = async (id_paciente,nome,data_nascimento,genero,cod_postal, registos) => {
    try{
        let doente = new DoenteSchema({id_paciente: id_paciente,nome: nome,data_nascimento: data_nascimento,genero: genero,cod_postal: cod_postal, registos: registos});
        let response = await doente.save();
        return { success: true, response};
    } catch(err){
        console.log(err);
        return { success: false, response:err};
    }
    
}