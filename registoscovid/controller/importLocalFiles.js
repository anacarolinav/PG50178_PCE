const fs = require("fs");

const doenteController = require('../controller/adiciona_registos')

module.exports.readFile = async () =>{
    const filePath ='/Users/anacarolinaalves/Documents/GitHub/PG50178_PCE/';
    const filenames= ['doentes.csv'];

    for(let name of filenames){
        const fileRead = fs.readFileSync(filePath + name);
        let lines = fileRead.toString().split('\n');
        for(let line of lines){
            let lineParams = line.split(';');
            if(lineParams[lineParams.length-1].includes('\r'))
                lineParams[lineParams.length-1] = lineParams[lineParams.length-1].slice(0,-1);
            console.log(lineParams)

            const newDoente = {
                codigo_postal: lineParams[0],
                data_nascimento: lineParams[1],
                genero: lineParams[2],
                id_paciente: lineParams[3],
                nome: lineParams[4]
              
            }
            doenteController.newDoente(newDoente.id_paciente, newDoente.nome, newDoente.data_nascimento, newDoente.genero, newDoente.codigo_postal)
        }
    }
}