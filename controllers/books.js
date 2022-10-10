import Book from '../models/Book.js';

//Create Book
export const createBook = async (req, res) => {
  try {
    const { titel, author, publishYear } = req.body;
    const newBook = new Book({
      titel,
      author,
      publishYear,
    });
    await newBook.save();
    return res.json({ newBook });
  } catch (error) {
    res.json({ message: 'Something went wrong' });
  }
};
