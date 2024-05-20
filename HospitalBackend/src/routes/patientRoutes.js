import { Router } from "express";
import patientController from "../controller/patientController.js";

const patientRouter = Router();
const patient = new patientController();

patientRouter.post("/add", patient.addPatient);

export default patientRouter;