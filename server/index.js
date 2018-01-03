require('dotenv').config({ path: './variables.env' });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Get the Teacher schema and create a model from the Schema
const teacherController = require('./controllers/teacher');

// Allow promises
mongoose.Promise = Promise;
// Connect with database
mongoose.connect(process.env.DATABASE);

// Define an express app and router and set a JSON parser
const app = express();
const router = express.Router();
// Set route to api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);


// Defining API Routes

/*  "/api/teachers"
 *  GET: Retrieves all Teachers
 *  PUT: Creates new Teacher
 */

router.route('/teachers')
  .put(teacherController.putTeachers)
  .get(teacherController.getTeachers);

/*  "/api/teachers/:id"
 *  GET: Find Teacher by id
 *  PUT: Update Teacher by id
 *  DELETE: Delete Teacher by id
 */

router.route('/teachers/:id')
  .get(teacherController.getTeacherById)
  .put(teacherController.updateTeacherById)
  .delete(teacherController.deleteTeacherById);


// Default GET / handling
app.get('/', (req, res) => res.send('Welcome!'));

// Internal server error response
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('📛 Something broke!');
});

// Start app and listen for requests
app.listen(4001, () => console.log('👂 Listening on port 4001!'));
