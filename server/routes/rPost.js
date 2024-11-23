const express = require("express");
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
}).single("image");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost
} = require("../controllers/postController");

const router = express.Router();

router.post("/getPosts", getAllPosts);
router.post("/create", upload, createPost);
router.post("/update", updatePost);
router.post("/delete", deletePost);

module.exports = router;
