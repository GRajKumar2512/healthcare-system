import express from "express";
import jwt from "jsonwebtoken";
import PatientRecord from "../models/PatientRecord.js";

const router = express.Router();

router.post("/add", (req, res) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "No token found" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, {}, (error, userData) => {
      if (error) throw error;

      const createRecord = new PatientRecord({});
    });
  }
});

export default router;
