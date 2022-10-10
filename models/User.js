import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rents: [
      {
        bookId: {
          type: String,
        },
        bookTitle: {
          type: String,
        },
        bookAuthor: {
          type: String,
        },
        startRentDate: {
          type: Date,
        },
        expectedEndRentDate: {
          type: Date,
        },
        actualEndRentDate: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
