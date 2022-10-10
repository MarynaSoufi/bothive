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

//getAllBooks
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort('-cretedAt');

    if (!books) {
      return res.json({ message: 'There are no Books' });
    }
    return res.json({ books });
  } catch (error) {
    res.json({ message: 'Something went wrong!' });
  }
};
