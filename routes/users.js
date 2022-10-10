import { Router } from 'express';
import { createUser } from '../controllers/users.js';

const router = new Router();

//Create User
//http://localhost:3002/api/users
router.post('/', createUser);

export default router;
