import mongoose from "mongoose";

const GeneticPatientSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  numFamilyMembers: Number,
}, { timestamps: true });

export default mongoose.model("GeneticPatient", GeneticPatientSchema);
