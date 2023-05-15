import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/authControllers';
import { UserService } from '../../usecase/auth/signupUsecases';
import { UserRepository } from '../../domain/repositories/userRepository';
import db from '../../database/databaseconnection';

const router = Router();

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Route for creating a new user
router.post('/users', userController.signUp.bind(userController));

export default router;
