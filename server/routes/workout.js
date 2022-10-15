import { Router } from 'express';
import Workout from '../models/workoutModel.js';

const router = Router();

//GET all workouts
router.get('/', (req, res) => {
  res.json({ message: 'get all workout' });
});

//GET single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'get single workout' });
});

//POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'delete a workout' });
});

//PATCH a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'update a workout' });
});

export default router;
