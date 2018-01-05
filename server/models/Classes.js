const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Class name is required.'
  },
  description: String,
  duration: [{
    startDate: Date,
    endDate: Date
  }],
  teacher: {
    type: ObjectId,
    required: 'Class teacher is required.'
  },
  students: [ObjectId],
  assignments: [{
    name: String,
    desription: String,
    dueDate: Date,
    grades: [{
      student: ObjectId,
      grade: Number,
      dateEntered: Date
    }]
  }]
});

module.exports = mongoose.model('Teacher', teacherSchema);