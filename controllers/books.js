import Book from '../models/Book.js';
import User from '../models/User.js';

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

//Rent The Book
export const rentTheBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const userId = req.params.userId;

    const book = await Book.findById(bookId);
    const user = await User.findById(userId);

    if (!book.isAvailable) {
      return res.json({ message: 'The book is not available!' });
    }

    //12096e5 = 2 weeks in milliseconds
    const rentBook = {
      userId: userId,
      firstname: user.firstname,
      email: user.email,
      address: user.address,
      startRentDate: Date.now(),
      expectedEndRentDate: Date.now() + 12096e5,
      actualEndRentDate: null,
    };

    const updatedBook = await Book.findByIdAndUpdate(bookId, {
      isAvailable: false,
      startRentDate: Date.now(),
      expectedEndRentDate: Date.now() + 12096e5,
      actualEndRentDate: null,
      $push: { rents: rentBook },
    });

    const rentUser = {
      bookId: bookId,
      bookTitle: book.titel,
      bookAuthor: book.author,
      bookPublishYear: book.publishYear,
      startRentDate: Date.now(),
      expectedEndRentDate: Date.now() + 12096e5,
      actualEndRentDate: null,
    };

    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: { rents: rentUser },
    });

    return res.json({ updatedBook, updatedUser });
  } catch (error) {
    res.json({ message: 'Something went wrong!' });
  }
};
