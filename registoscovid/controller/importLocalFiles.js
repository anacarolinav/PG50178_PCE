const fs = require("fs");

const doenteController = require('./adiciona_doentes')


function normalizaTemp(temp){
    return parseFloat(temp.split(" ")[0]);
}

function normalizaVazios(valor){
    return (valor === '' || !valor) ? 0 : valor;
}



module.exports.readFile = async () => {
    const filePath = '/Users/anacarolinaalves/Documents/GitHub/PG50178_PCE/';
    const filenames = ['doentes.csv', 'registos_covid19.csv'];


    let doentes = []

    const fileRead = fs.readFileSync(filePath + filenames[0]);
    let lines = fileRead.toString().split('\n');
    for (let line of lines) {
        let lineParams = line.split(';');
        if (lineParams[lineParams.length - 1].includes('\r'))
            lineParams[lineParams.length - 1] = lineParams[lineParams.length - 1].slice(0, -1);
        //console.log(lineParams)

        const newDoente = {
            codigo_postal: lineParams[0],
            data_nascimento: lineParams[1],
            genero: lineParams[2],
            id_paciente: lineParams[3],
            nome: lineParams[4],
            registos: []

        }
        //doenteController.newDoente(newDoente.id_paciente, newDoente.nome, newDoente.data_nascimento, newDoente.genero, newDoente.codigo_postal, newDoente.registos)

        //console.log(newDoente)
        doentes.push(newDoente)
    }





    let registos = []

    const fileRead1 = fs.readFileSync(filePath + filenames[1]);
    let lines1 = fileRead1.toString().split('\n');
    for (let line of lines1) {
        let lineParams = line.split(';');
        if (lineParams[lineParams.length - 1].includes('\r'))
            lineParams[lineParams.length - 1] = lineParams[lineParams.length - 1].slice(0, -1);

        const newRegisto = {
            num_sequencial: normalizaVazios(lineParams[0]),
            data_registo: normalizaVazios(lineParams[1]),
            temperatura: normalizaVazios(normalizaTemp(lineParams[2])),
            falta_de_ar: normalizaVazios(lineParams[3]),
            dor_de_cabeca: normalizaVazios(lineParams[4]),
            dor_muscular: normalizaVazios(lineParams[5]),
            tosse: normalizaVazios(lineParams[6]),
            diarreia: normalizaVazios(lineParams[7]),
            olfato_paladar: normalizaVazios(lineParams[8]),
            avaliacao_global: normalizaVazios(lineParams[9])
        }

        //console.log(newRegisto)
        registos.push(newRegisto)
    }


    doentes.map( x => {
        x.registos = registos.filter(y => y.num_sequencial === x.id_paciente);
        doenteController.newDoente(x.id_paciente, x.nome, x.data_nascimento, x.genero, x.codigo_postal, x.registos)
        return x;
    })

    console.log(doentes)
}
