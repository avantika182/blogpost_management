import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

app.post("/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json({ message: "Post saved successfully" });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
