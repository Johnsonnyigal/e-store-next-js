import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
