import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Todo:Prevent model overwrite upon repeated imports
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;