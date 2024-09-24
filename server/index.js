import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors({
  origin: '*'
}));
app.get('/', (req, res) => {
  // res.send('Hello My Fen!');
  res.json([{ id: 1, title: 'Hello' }])
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});