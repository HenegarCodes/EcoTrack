require('dotenv').config({path:'backend/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Initialize express app
const app = express();
// Middleware setup
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/users', require('./routes/userRoutes'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
