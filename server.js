import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./models/User.js";
import TestResult from "./models/TestResult.js";
import TestAttempt from "./models/TestAttempt.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/cc_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ SIGNUP API
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    res.json({ message: "Account created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

// ✅ CREATE TEST ATTEMPT (history)
app.post("/attempts", async (req, res) => {
  try {
    const { email, testType, score, total, timeTaken, answers } = req.body;
    if (!email || !testType || typeof score !== "number" || typeof total !== "number") {
      return res.status(400).json({ message: "Missing or invalid fields" });
    }
    const doc = await TestAttempt.create({
      userEmail: email,
      testType,
      score,
      total,
      timeTaken: timeTaken || 0,
      answers: Array.isArray(answers) ? answers : [],
    });
    res.status(201).json({ message: "Attempt recorded", attempt: doc });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LIST TEST ATTEMPTS FOR A USER (optionally filter by testType)
app.get("/attempts", async (req, res) => {
  try {
    const { email, testType } = req.query;
    if (!email) return res.status(400).json({ message: "Email is required" });
    const query = { userEmail: email };
    if (testType) query.testType = testType;
    const attempts = await TestAttempt.find(query).sort({ createdAt: -1 });
    res.json({ attempts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LOGIN API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ SAVE/UPSERT TEST RESULT
app.post("/results", async (req, res) => {
  try {
    const { email, testType, score, total, timeTaken, answers } = req.body;

    if (!email || !testType || typeof score !== "number" || typeof total !== "number") {
      return res.status(400).json({ message: "Missing or invalid fields" });
    }

    const updated = await TestResult.findOneAndUpdate(
      { userEmail: email, testType },
      { $set: { score, total, timeTaken: timeTaken || 0, answers: Array.isArray(answers) ? answers : [] } },
      { upsert: true, new: true }
    );

    res.json({ message: "Result saved", result: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET LATEST RESULTS PER TEST FOR A USER
app.get("/results", async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const docs = await TestResult.find({ userEmail: email }).sort({ updatedAt: -1 });
    const results = {};
    for (const d of docs) {
      if (!results[d.testType]) {
        results[d.testType] = {
          score: d.score,
          total: d.total,
          timeTaken: d.timeTaken,
          updatedAt: d.updatedAt,
        };
      }
    }
    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
