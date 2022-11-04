import { Router } from 'express';
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from '../controllers/workoutController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = Router();

//require auth for all workout routes
router.use(requireAuth);

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
