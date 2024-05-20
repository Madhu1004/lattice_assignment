import mongoose, { Mongoose } from "mongoose";

const psychiatristsSchema = new mongoose.Schema({
    HospitalName: {
        type : String,
    },
    totalPsychiatristCount : {
        type : Number,
    },
    totalPatientCount : {
        type : Number,
    },
    

})
export default mongoose.model("psychiatrist", psychiatristsSchema);