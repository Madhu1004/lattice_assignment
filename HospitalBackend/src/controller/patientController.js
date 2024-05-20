import Patient from "../model/patientModel.js";

export default class {
    constructor (){

    }
    async addPatient (req,res) {
        const {name, address, email, number, password, imgUrl} = req.body;
        const data = {name, address, email, number, password, imgUrl};
        const result  = await Patient.create(data);
        if(result){
            return res.status(200).json({message:"Successfully Added"});
        }
        return res.status(401).json({message:"Error saving Data of the Patient"});
    }
}