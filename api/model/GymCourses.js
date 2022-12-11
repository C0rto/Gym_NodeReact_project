import mongoose from 'mongoose';

const { Schema } = mongoose;

const GymCourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'sala pesi',
  },
  description: {
    type: String,
    required: false,
  },
  time: [
    {
      start: { type: Date },
      end: { type: Date },
    },
  ],
  price: {
    type: Number,
    required: true,
    default: 1,
  },
  maxPeople: {
    type: Number,
    default: 4,
  },
  users: {
    type: [String],
  },
});

export default mongoose.model('Course', GymCourseSchema);
