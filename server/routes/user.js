import express from 'express';
import { loginUser, signupUser } from '../controllers/userController.js';

const router = express.Router();

// login routes
router.post('/login', loginUser);

// signup routes
router.post('/signup', signupUser);

export default router;
