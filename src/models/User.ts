import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  authType: {
    type: String,
    enum: ["LOCAL", "GOOGLE"],
    default: "LOCAL",
  },
  userType: {
    type: String,
    enum: ["USER", "CREATOR", "ARTIST", "DESIGNER"],
    default: "USER",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  subscription: {
    type: String,
    enum: ["FREE", "PREMIUM"],
    default: "FREE",
  },
  password: {
    type: String,
    required: function () {
      return this.authType === "LOCAL";
    },
  },
  available: {
    type: Boolean,
    required: function () {
      return this.userType === "DESIGNER";
    },
    default: false,
  },
  fullName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  avatarRef: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  bio: {
    type: String,
    required: false,
    default: ""
  },
  specialization: {
    type: String,
    required: false,
    default: ""
  },
  phoneNumber:{
    type: String,
    required: false,
    default: ""
  },
  website: {
    type: String,
    required: false,
    default: ""
  }
});

export const UserModel = model("User", UserSchema);
