import connectDB from "@/lib/mongodb";
import User from "@/models/user.model";
import Test from "@/models/test.model";
import Mood from "@/models/mood.model";
import bcrypt from "bcryptjs";

const users = [
  {
    name: "John Doe",
    nim: "221122111",
    prodi: "gizi",
    email: "john@example.com",
    password: "password123",
    role: "student",
  },
  {
    name: "Jane Doe",
    nim: "221122112",
    prodi: "bidan",
    email: "jane@example.com",
    password: "password123",
    role: "student",
  },
  {
    name: "Bapak Konsultan",
    email: "bapak@gmail.com",
    password: "password123",
    role: "consultant",
  },
  {
    name: "Ibu Konsultan",
    email: "ibu@gmail.com",
    password: "password123",
    role: "consultant",
  },
];

const seed = async () => {
  try {
    await connectDB();

    await Test.deleteMany({});
    console.log("Existing tests deleted");

    await Mood.deleteMany({});
    console.log("Existing moods deleted");

    await User.deleteMany({});
    console.log("Existing users deleted");

    // Create new users
    // for (const user of users) {
    //   const existingUser = await User.findOne({ email: user.email });
    //   if (!existingUser) {
    //     const hashedPassword = await bcrypt.hash(user.password, 12);
    //     await User.create({
    //       name: user.name,
    //       email: user.email,
    //       nim: user.nim,
    //       prodi: user.prodi,
    //       password: hashedPassword,
    //       role: user.role,
    //     });
    //   }
    // }

    // console.log("Users seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

seed();
