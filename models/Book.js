import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
  {
    titel: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    startRentDate: {
      type: Date,
      default: null,
    },
    expectedEndRentDate: {
      type: Date,
      default: null,
    },
    actualEndRentDate: {
      type: Date,
      default: null,
    },
    rents: [
      {
        userId: {
          type: String,
        },
        firstname: {
          type: String,
        },
        email: {
          type: String,
        },
        address: {
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

export default mongoose.model('Book', BookSchema);
