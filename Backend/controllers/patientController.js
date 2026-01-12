import Patient from "./models/PatientSchema.js";
import GeneticPatient from "./models/GeneticPatient.js";
import FamilyMember from "./models/FamilyMember.js";
import { sendEmail } from "./utils/smtp.js";
import { sendWhatsApp } from "./utils/twilio.js";

const GENETIC_DISEASES = {
  Cardiovascular: ["Marfan", "HCM", "Long QT"],
  Cancer: ["BRCA", "Lynch", "Li-Fraumeni"],
  Metabolic: ["Wilson's", "Hemochromatosis"],
  Neuromuscular: ["Duchenne", "Fragile X", "glaucoma"],
  Hematologic: ["Sickle cell", "Thalassemia"],
  MultiSystem: ["Cystic fibrosis", "FAP"]
};

const GENETIC_DISEASE_LIST = Object.values(GENETIC_DISEASES)
  .flat()
  .map(d => d.toLowerCase());


// CREATE PATIENT + FAMILY GRAPH
export const createPatient = async (req, res) => {
  try {
    const {
      name, age, disease, hospitalName,
      medicines, tests, admittedAt, dischargedAt, family
    } = req.body;

    const isGenetic = GENETIC_DISEASE_LIST.includes(disease.toLowerCase());

    const patient = await Patient.create({
      name,
      age,
      disease,
      isGenetic,
      hospitalName,
      medicines,
      tests,
      admittedAt,
      dischargedAt
    });

    let geneticPatient = null;
    let familyMembers = [];

    if (isGenetic && Array.isArray(family) && family.length > 0) {
      geneticPatient = await GeneticPatient.create({
        patientId: patient._id,
        numFamilyMembers: family.length
      });

      const message = `Alert: ${patient.name} diagnosed with ${patient.disease}. Please get screened.`;

      for (const member of family) {
        let emailSent = false;
        let whatsappSent = false;

        try {
          if (member.email) {
            await sendEmail(member.email, "Genetic Disease Alert", message);
            emailSent = true;
          }
          if (member.phone) {
            await sendWhatsApp(member.phone, message);
            whatsappSent = true;
          }
        } catch (err) {
          console.error("Notification failed:", member);
        }

        const saved = await FamilyMember.create({
          geneticPatientId: geneticPatient._id,
          name: member.name,
          relation: member.relation,
          email: member.email,
          phone: member.phone,
          emailSent,
          whatsappSent
        });

        familyMembers.push(saved);
      }
    }

    res.status(201).json({
      patient,
      genetic: geneticPatient,
      family: familyMembers
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// FLAT LIST FOR DASHBOARD
export const getAllPatients = async (req, res) => {
  const patients = await Patient.find({}, 
    "name age disease isGenetic hospitalName createdAt"
  ).sort({ createdAt: -1 });

  res.json(patients);
};


// FULL PATIENT PROFILE (TIMELINE + FAMILY)
export const getPatientById = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.status(404).json({ error: "Patient not found" });

  let genetic = null;
  let family = [];

  if (patient.isGenetic) {
    genetic = await GeneticPatient.findOne({ patientId: patient._id });
    if (genetic) {
      family = await FamilyMember.find({ geneticPatientId: genetic._id });
    }
  }

  res.json({ patient, genetic, family });
};


// UPDATE PATIENT
export const updatePatient = async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};


// DELETE PATIENT + CASCADE FAMILY
export const deletePatient = async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);

  if (patient?.isGenetic) {
    const genetic = await GeneticPatient.findOneAndDelete({ patientId: patient._id });
    if (genetic) {
      await FamilyMember.deleteMany({ geneticPatientId: genetic._id });
    }
  }

  res.json({ message: "Patient and related family records deleted" });
};


// SEND CUSTOM EMAIL
export const sendCustomEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    await sendEmail(to, subject, message);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
