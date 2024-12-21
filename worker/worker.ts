import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";
import nodemailer from "nodemailer";
import "dotenv/config";
import fs from "fs";
import path from "path";
import Mustache from "mustache";

const GMAIL = process.env.GMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GMAIL,
    pass: PASSWORD,
  },
});

// Verify SMTP Configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Configuration Error:", error);
  } else {
    console.log("SMTP Configuration is correct!");
  }
});

const otpMail = async (email: string, data: { otp: string }) => {
  try {
    let template = fs.readFileSync(
      path.join(process.cwd(), "views/email/otp.html"),
      "utf-8",
    );

    let message = {
      from: GMAIL,
      to: email,
      subject: "OTP Untuk Verifikasi Akun",
      html: Mustache.render(template, data),
    };

    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.error("Error in otpMail:", error);
    throw error;
  }
};

async function processUsersWithOTP() {
  await connectDB();
  console.log("Database connected");

  console.log("Checking users with active OTP...");

  const users = await User.find({
    otp: { $ne: null },
    deleted_at: null,
    otp_expires_at: { $gt: new Date() },
    otp_status: false,
    processing: false,
  });

  for (const user of users) {
    try {
      user.processing = true;
      await user.save();

      console.log(`Sending OTP to ${user.email}`);
      await otpMail(user.email, { otp: user.otp });

      console.log(`OTP sent to ${user.email}`);

      user.otp_status = true;
      await user.save();
    } catch (err) {
      console.log(`Error sending OTP to ${user.email}: ${err.message}`);
    } finally {
      user.processing = false;
      await user.save();
    }
  }
}

async function startProcessUsersWithOTP() {
  while (true) {
    await processUsersWithOTP();
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

startProcessUsersWithOTP();
