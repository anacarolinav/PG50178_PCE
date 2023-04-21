let ServiceSchema = require('../model/service');


module.exports.newService = async (servicecod,sensordesc) => {
    try{
        let service = new ServiceSchema({servicecod: servicecod, sensordesc: sensordesc});
        let response = await service.save();
        return { success: true, response};
    } catch(err){
        console.log(err);
        return { success: false, response:err};
    }
    
}