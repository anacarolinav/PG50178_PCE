var express = require("express");
var router = express.Router();
var axios = require('axios');


let SensorController = require("../controller/sensor");
let ServiceController = require("../controller/service");
let PatientController = require("../controller/patient");
let ClinicalinfoController = require("../controller/clinicalInfo");
let CaretakerController = require("../controller/careTaker");




router.get('/acedehpeixoto/:id', (req, res) => {
    axios.get(
        'http://nosql.hpeixoto.me/api/sensor/' + req.params.id
    )

        //assincrono para esperar pelas funções manualmente
        .then(async response => {
            
            /* Adicionar novo sensor */
            const { sensorid, sensornum, type_of_sensor } = response.data;
            let newSensorResponse = await SensorController.newSensor(sensorid, sensornum, type_of_sensor);
            if (newSensorResponse.success) {
                res.status(200).json({ info: "Novo sensor adicionado com sucesso" });
            } else {
                res.status(200).json({ info: "Erro ao adicionar novo sensor" });
            }


            /* Adicionar novo caretaker */
            const { id, nome } = response.data;
            let newCaretakerResponse = + await CaretakerController.newCareTaker(id, nome);
            if (newCaretakerResponse.success) {
                res.status(200).json({ info: "Novo caretaker adicionado com sucesso" });
            } else {
                res.status(200).json({ info: "Erro ao adicionar novo caretaker" });
            }

            /* Adicionar novo patient */
            const { patientid, patientname, patientbirthdate, patientage } = response.data;
            let newPatientResponse = + await PatientController.newPatient(patientid, patientname, patientbirthdate, patientage);
            if (newPatientResponse.success) {
                res.status(200).json({ info: "Novo paciente adicionado com sucesso" });
            } else {
                res.status(200).json({ info: "Erro ao adicionar novo paciente" });
            }

            /* Adicionar novo service */
            const { servicecod, servicedesc } = response.data;
            let newServiceResponse = + await ServiceController.newService(servicecod, servicedesc);
            if (newServiceResponse.success) {
                res.status(200).json({ info: "Novo serviço adicionado com sucesso" });
            } else {
                res.status(200).json({ info: "Erro ao adicionar novo serviço" });
            }

            /* Adicionar novo clinicalinfo */
            const { clinicalInfoID, admdate, bed, bodytemp, bloodPress, bpm, sato2, timestamp } = response.data;
            let newClinicalinfoResponse = + await ClinicalinfoController.newClinicalinfo(clinicalInfoID, admdate, bed, bodytemp, bloodPress.systolic, bloodPress.diastolic, bpm, sato2, timestamp);
            if (newClinicalinfoResponse.success) {
                res.status(200).json({ info: "Novo clinicalinfo adicionado com sucesso" });
            } else {
                res.status(200).json({ info: "Erro ao adicionar novo clinicalinfo" });
            }



        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})





router.get("/", (req, res) => {
    res.json({
        rota: "index"
    })
})

module.exports = router;