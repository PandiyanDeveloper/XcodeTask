const User = require("../models/mUser");

// Create a new user
exports.getUserById = async (req, res) => {
  try {
    const oUser = await User.findOne({ _id: req.body?.userId });
    res.status(201).json(oUser);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching user", error: error.message });
  }
};
