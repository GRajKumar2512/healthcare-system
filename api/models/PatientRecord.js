import { Schema, model } from "mongoose";

const PatientRecordSchema = new Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  contactInformation: { type: String, required: true },
  address: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  knownAllergies: { type: String },
  chronicConditions: { type: String },
  medications: { type: String },
  documentUploads: { type: String }, // Assuming a file path for simplicity
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model("PatientRecord", PatientRecordSchema);
