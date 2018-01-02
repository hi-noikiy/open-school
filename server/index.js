require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Get the User schema and create a model from the Schema
const teacherController = require('./controllers/teacher');
const studentController = require('./controllers/student');

// Allow promises
mongoose.Promise = Promise;
// Connect with database
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true,
});

// Define an express app and router and set a JSON parser
const app = express();
const router = express.Router();
// Set route to api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);


// Defining API Routes

/*  "/api/users"
 *  GET: Retrieves all users
 *  PUT: Creates new user
 */

router.route('/users')
  .put(teacherController.putUsers)
  .get(teacherController.getUsers);

/*  "/api/users/:id"
 *  GET: Find user by id
 *  PUT: Update user by id
 *  DELETE: Delete user by id
 */

router.route('/users/:id')
  .get(teacherController.getUserById)
  .put(teacherController.updateUserById)
  .delete(teacherController.deleteUserById);

router.route('/users/shops/:id')
  .get(teacherController.getUserShops);

/*  "/api/shops"
 *  GET: Retrieves all shops
 *  PUT: Creates new shop
 */

router.route('/shops')
  .put(studentController.putShops)
  .get(studentController.getShops);


// Default GET / handling
app.get('/', (req, res) => res.send('Welcome!'));

// Internal server error response
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('📛 Something broke!');
});

// Start app and listen for requests
app.listen(2001, () => console.log('👂 Listening on port 2001!'));
