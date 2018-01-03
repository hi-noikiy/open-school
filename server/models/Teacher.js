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
  announcements: [{
    title: String,
    body: String,
    datePosted: Date
  }]
});

module.exports = mongoose.model('Teacher', teacherSchema);
