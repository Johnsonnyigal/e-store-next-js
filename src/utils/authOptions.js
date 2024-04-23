import { connectDB } from "../../config/connectDB";
import User from "@/models/User";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        prompt: "consent",
        access_type: "offline",
        response_type: 
      },
    }),
  ],
};
