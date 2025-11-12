import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, index: true },
    testType: {
      type: String,
      enum: ["java", "oops", "sql", "javaCoding"],
      required: true,
      index: true,
    },
    score: { type: Number, required: true },
    total: { type: Number, required: true },
    timeTaken: { type: Number, default: 0 }, // minutes
    answers: { type: [Number], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("TestResult", testResultSchema);
