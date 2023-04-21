var express = require("express");
var router = express.Router();
var axios = require('axios');


router.get("/", (req, res) => {
    res.json({
        rota: "sensores"
    })
})

router.get("/identificador/:id", (req, res) => {
    res.json({
        identificador: req.params.id
    })
})


//SO ACRESCENTEI ISTO PARA AS ROTAS: 
//Criar rotas: get/sensor/list —> listar os sensores guardados
//Criar rota: get/sensor/list/:id —> para listar sensor com id

router.get("/sensors/list", (req, res) => {
    res.json({
        identificador: req.body
    })
})

router.get("/sensors/list/:id", (req, res) => {
    res.json({
        identificador: req.params.id
    })
})


module.exports = router;
