import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import workoutRoutes from './routes/workout.js';

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
