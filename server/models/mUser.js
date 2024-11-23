const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profImg: { type: String },
    uName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    postCnt: { type: Number },
    followers: { type: Number },
    following: { type: Number },
    bio: { type: String }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
