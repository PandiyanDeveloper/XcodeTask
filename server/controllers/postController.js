const Post = require("../models/mPost");
// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { userId, desc } = req.body;
    const { buffer, mimetype } = req.file;

    const newPost = new Post({
      userId,
      desc,
      image: buffer,
      imageType: mimetype
    });

    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating post", error: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const aPosts = await Post.find({ userId: req?.body?.userId });
    if (!aPosts?.length) {
      return res.status(404).json({ message: "posts not found" });
    }
    const formattedPosts = aPosts.map((post) => ({
      ...post.toObject(),
      imageUrl: `/image/${post._id}`
    }));
    res.status(200).json(formattedPosts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req?.body?._id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedPost) {
      return res.status(404).json({ message: "post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating post", error: error.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.body._id);
    if (!deletedPost) {
      return res.status(404).json({ message: "post not found" });
    }
    res.json({ message: "post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};
