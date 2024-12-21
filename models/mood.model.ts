import mongoose from "mongoose";
import User from "./user.model";

const moodSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  emoji: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: new Date().toISOString(),
  },
}, {
  timestamps: true
});

const Mood = mongoose.models.Mood || mongoose.model("Mood", moodSchema);

export default Mood;

export interface Mood {
  user_id: string;
  emoji: string;
  note: string;
  date: string;
}

export interface MoodDocument extends Mood, mongoose.Document {}
