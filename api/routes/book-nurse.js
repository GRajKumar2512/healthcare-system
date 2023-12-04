import express from "express";
import Booking from "../models/Booking.js";
import NurseRecord from "../models/NurseRecord.js";
import transporter from "../lib/Nodemailer.js";

const router = express.Router();

router.get("/patient/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ patient: id }).populate("nurse");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/nurse/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ nurse: id });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// send mail to the nurse email id
router.post("/", async (req, res) => {
  const {
    name,
    contact,
    address,
    ailmentReason,
    currentMedication,
    nurse,
    patient,
    fromDate,
    toDate,
  } = req.body;

  try {
    const createdBooking = new Booking({
      name,
      contact,
      address,
      ailmentReason,
      currentMedication,
      nurse,
      patient,
      fromDate,
      toDate,
    });

    await createdBooking.save();

    // const populatedBooking = await Booking.findById(createdBooking._id).populate("nurse");
    // const nurseEmail = populatedBooking.nurse.email;

    // const mailOptions = {
    //   from: "your@gmai.com",
    //   to: nurseEmail,
    //   subject: "New Booking",
    //   text: "A new booking has been made. Please check your schedule."
    // }

    // await transporter.sendMail(mailOptions);

    res.status(200).json(createdBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
