import { Router } from 'express';

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
router.post('/', (req, res) => {
  res.json({ mesage: 'create a new workout' });
});

//DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'delete a workout' });
});

//PATCH a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'update a workout' });
});

export default router
