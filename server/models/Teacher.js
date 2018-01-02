const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name.'
  },
  classes: [
    {
      type: String
    }
  ],
  announcements: {
    type: String,
  },
  description: {
    type: String,
    trim: true
  },
  isBaker: {
    type: Boolean,
    default: false
  },
  userRating: {
    type: Number,
    default: 0
  },
  bakerRating: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    required: 'Please enter an email.'
  }
});

module.exports = mongoose.model('Teacher', teacherSchema);
