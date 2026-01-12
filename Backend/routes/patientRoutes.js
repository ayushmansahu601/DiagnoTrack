import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  sendCustomEmail  // 👈 import new controller
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/createPatient", createPatient);
router.get("/getAllPatients", getAllPatients);
router.get("/:id", getPatientById);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

// 🆕 New route for custom email sending
router.post("/notify-family", sendCustomEmail);

export default router;
