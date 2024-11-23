const express = require("express");
const { getUserById } = require("../controllers/userController");

const router = express.Router();

router.post("/getUser", getUserById);

module.exports = router;
