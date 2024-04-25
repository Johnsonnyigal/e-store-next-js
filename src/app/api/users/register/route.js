import { connectDB } from "../../../../../config/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    await connectDB();

    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { message: "User already exists " },
        { status: 500 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email: email,
        password: hashedPassword,
      });
      await newUser.save();

      return new Response(
        JSON.stringify({ message: "User created successfully" }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error creating user: ", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
