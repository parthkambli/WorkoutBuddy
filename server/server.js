import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
