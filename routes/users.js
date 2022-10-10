import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getAllUserRents,
} from '../controllers/users.js';

const router = new Router();

//Create User
//http://localhost:3002/api/users
router.post('/', createUser);

//Get All Users
//http://localhost:3002/api/users
router.get('/', getAllUsers);

//Get All User Rented books(books rent history of specific user)
//http://localhost:3002/api/users/id/rents
router.get('/:id/rent', getAllUserRents);

export default router;
