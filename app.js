const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./app_server/routes/index');

const app = express(); // Make sure this is defined

// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://kannan:ABC123@restaurantdb.pqd7a.mongodb.net/?retryWrites=true&w=majority&appName=RestaurantDB';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Atlas connected'))
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
