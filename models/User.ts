import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });


export default mongoose.models.User || mongoose.model("User", userSchema);