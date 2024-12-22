import mongoose from "mongoose";
import User from "./user.model";

const consultSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    semester: {
      type: Number,
      default: 1,
    },
    by: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: new Date().toISOString(),
    },
  },
  { timestamps: true },
);

const Consult =
  mongoose.models.Consult || mongoose.model("Consult", consultSchema);

export default Consult;
