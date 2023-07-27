import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workout.js";
import userRoutes from "./routes/user.js";

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB & Server is running on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
