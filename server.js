
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/config.js';
import postRouter from './routes/postRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT ;
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/",postRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});