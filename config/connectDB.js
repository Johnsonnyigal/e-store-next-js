const mongoose = require("mongoose");
let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONG0DB_URI);
    connected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};
module.exports = { connectDB };
