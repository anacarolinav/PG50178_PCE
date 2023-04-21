let CareTakerSchema = require('../model/caretaker');


module.exports.newCareTaker = async (id,nome) => {
    try{
        let careTaker = new CareTakerSchema({id:id, nome: nome});
        let response = await careTaker.save();
        return { success: true, response};
    } catch(err){
        console.log(err);
        return { success: false, response:err};
    }
    
}