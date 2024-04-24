import { connectDB } from "../../../../config/connectDB";
import User from "@/models/User";

export const POST = async (request) => {
  try {
    await connectDB();

    const formData = await request.formData();
    const UserData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const existingUser = await User.findOne({ email: UserData.email });
    if (existingUser) {
      throw new Error({ message: "User already exists" }, { status: 500 });
    }

    const newUser = new User(UserData);
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user: ", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
