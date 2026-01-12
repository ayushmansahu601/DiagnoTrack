import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  disease: String,
  isGenetic: Boolean,

  hospitalName: String,
  medicines: [String],
  tests: [String],

  admittedAt: Date,
  dischargedAt: Date,

}, { timestamps: true });

export default mongoose.model("Patient", PatientSchema);
