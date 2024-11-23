const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    desc: { type: String, required: true },
    image: { type: Buffer, required: true },
    likes: { type: Number, default: 0 },
    cmntCnt: { type: Number, default: 0 },
    userId: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
