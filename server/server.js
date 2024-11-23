const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/rUser");
const postRoutes = require("./routes/rPost");

const app = express();
const PORT = 5000;
const mongoUrl = "mongodb://localhost:27017/XcodeDb";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
