import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
    },
    ballance: {
      type: String,
      default: "50000",
    },
  },
  { minimize: false }
);

const User = mongoose.model("User", UserSchema);

export default User;
