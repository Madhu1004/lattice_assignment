import express from 'express';
import patientRouter from './routes/patientRoutes.js';

const app = express();
app.use(express.json());
app.use("/api",patientRouter);

export default app;