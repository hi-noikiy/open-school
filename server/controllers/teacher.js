// Get Teacher model
const Teachers = require('../models/Teacher');

// Handle errors thrown by API requests.
function handleErrors(res, err) {
  console.log(`📛 Error occurred: ${err}`);
  res.status(400).json(err);
}

// Create endpoint /api/Teachers for GET
exports.getTeachers = (req, res) => {
  Teachers.find()
    .then(teachers => res.json(teachers));
};

// Create endpoint /api/Teachers for PUT
exports.putTeachers = (req, res) => {
  Teachers.create(req.body)
    .then((teacher) => {
      res.json(teacher);
      console.log(`👤 Successfully created new Teacher ${teacher.name}.`);
    })
    .catch(err => handleErrors(res, err));
};

exports.getTeacherById = (req, res) => {
  Teachers.findOne({
    _id: req.params.id
  })
    .then((teacher) => {
      // If no Teacher found (null), send 404 error
      if (!teacher)
        res.status(404).send('Teacher not found.');
      else
        res.send(teacher);
    })
    .catch(err => console.log(`📛 Error: ${err}`));
};

exports.updateTeacherById = (req, res) => {
  Teachers.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then((teacher) => {
      // If no Teacher found (null), send 404 error
      if (!teacher)
        res.status(404).send('Teacher not found.');
      else {
        res.send(teacher);
        console.log(`👤 Successfully updated teacher ${teacher.name}.`);
      }
    })
    .catch(err => console.log(`📛 Error: ${err}`));
};

exports.deleteTeacherById = (req, res) => {
  Teachers.findByIdAndRemove(req.params.id)
    .then((teacher) => {
      // If no Teacher found (null), send 404 error
      if (!teacher)
        res.status(404).send('Teacher not found.');
      else {
        res.send('Teacher deleted.');
        console.log(`👤 Successfully deleted teacher ${teacher.name}.`);
      }
    })
    .catch(err => console.log(`📛 Error: ${err}`));
};
