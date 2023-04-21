let ClinicalSchema = require('../model/clinicalInfo');


module.exports.newClinicalInfo = async (clinicalInfoID, admdate, bed, bodytemp, bpm, diastolic, systolic, sato2) => {
    try{
        let bloodPressureObject = {systolic: systolic, diastolic: diastolic}
        let clinicalInfo = new ClinicalSchema({clinicalInfoID: clinicalInfoID, 
            admdate: admdate, 
            bed: bed, 
            bodytemp: bodytemp, 
            bloodpress: bloodPressureObject, 
            bpm: bpm, 
            sato2: sato2});
            
        let response = await clinicalInfo.save();
        return { success: true, response};
    } catch(err){
        console.log(err);
        return { success: false, response:err};
    }
    
}