import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema({
  geneticPatientId: { type: mongoose.Schema.Types.ObjectId, ref: "GeneticPatient" },
  name: String,
  relation: String,
  email: String,
  phone: String,
  emailSent: Boolean,
  whatsappSent: Boolean
}, { timestamps: true });

export default mongoose.model("FamilyMember", FamilySchema);
