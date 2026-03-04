
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/config.js';
import {Post} from'./models/postModel.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT ;
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post("/post", async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = await Post.create({
      title,
      content
    });

    res.status(201).json({
      success: true,
      data: newPost
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});