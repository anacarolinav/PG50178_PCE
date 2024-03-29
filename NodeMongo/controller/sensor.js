let SensorSchema = require('../model/sensor');


module.exports.newSensor = async (sensorid,sensornum,type) => {
    try{
        let sensor = new SensorSchema({sensorid:sensorid, sensornum:sensornum, type_of_sensor:type});
        let response = await sensor.save();
        return { success: true, response};
    } catch(err){
        console.log(err);
        return { success: false, response:err};
    }
    
}

//criar função que faça listagem de sensores existentes
module.exports.getAllSensors = async () => {
    try {
        let sensors = await SensorSchema.find();
        return {success: true, sensors};
    } catch(err) {
        console.log(err);
        return {success: false, response: err};
    }
}