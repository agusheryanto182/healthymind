import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Silahkan isi Nama"],
      minLength: [3, "Nama minimal 3 karakter"],
    },
    nim: {
      type: String,
      default: null,
      required: true,
    },
    prodi: {
      type: String,
      default: null,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Silahkan isi email"],
    },
    password: {
      type: String,
      required: [true, "Silahkan isi password"],
    },
    role: {
      type: String,
      enum: ["student", "consultant"],
      default: "student",
    },
    otp: {
      type: String,
      default: null,
    },
    otp_expires_at: {
      type: Date,
      default: null,
    },
    otp_status: {
      type: Boolean,
      default: false,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    processing: {
      type: Boolean,
      default: false,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
