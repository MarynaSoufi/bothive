import { Router } from 'express';
import { createBook } from '../controllers/books.js';

const router = new Router();

//CreateBook
//http://localhost:3002/api/books
router.post('/', createBook);

export default router;
