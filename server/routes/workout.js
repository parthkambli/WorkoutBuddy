import { Router } from 'express';
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workoutController.js';

const router = Router();

//GET all workouts
router.get('/', getWorkouts);

//GET single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);

//PATCH a workout
router.patch('/:id', updateWorkout);

export default router;
