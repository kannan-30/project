const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./app_server/routes/index');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/restaurantDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Set view engine to Jade/Pug
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
