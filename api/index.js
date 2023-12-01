import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import profileRoute from "./routes/profile.js";
import recordRoute from "./routes/patients.js";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("database connected..."))
  .catch((error) => console.log(error.message));

// middle wares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// routes
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);
app.use("/record", recordRoute);

// testing
app.use("/test", (req, res) => {
  res.json("ok");
});

app.listen(4000, () => console.log("server running on port: 4000"));
