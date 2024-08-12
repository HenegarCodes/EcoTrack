require('dotenv').config({path:'backend/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Initialize express app
const app = express();
// Middleware setup
app.use(cors());
app.use(express.json());


// Register routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));

//error handler middleware
app.use(errorHandler);

// MongoDB connection
connectDB(); 

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
