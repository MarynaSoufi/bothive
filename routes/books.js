import { Router } from 'express';
import { createBook, getAllBooks } from '../controllers/books.js';

const router = new Router();

//CreateBook
//http://localhost:3002/api/books
router.post('/', createBook);

//GetAllBookss
//http://localhost:3002/api/books
router.get('/', getAllBooks);

export default router;
