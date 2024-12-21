import mongoose from "mongoose";
import User from "./user.model";

const testSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    score: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    semester: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
