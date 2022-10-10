import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/users.js';

const router = new Router();

//Create User
//http://localhost:3002/api/users
router.post('/', createUser);

//Get All Users
//http://localhost:3002/api/users
router.get('/', getAllUsers);

export default router;
