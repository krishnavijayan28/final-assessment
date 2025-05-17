const express = require("express");
const cors = require("cors");
const BlogModel = require("./model");
require("./connection");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching posts" });
  }
});

app.post("/add", async (req, res) => {
  try {
    const newPost = new BlogModel(req.body);
    await newPost.save();
    res.send({ message: "Post added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding post" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});