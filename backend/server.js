require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Initialize express app
const app = express();
console.log("MongoDB URI:", "mongodb+srv://spencerhenegar:baxter@ecotrack.klb9b.mongodb.net/");
// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// MongoDB connection
mongoose.connect("mongodb+srv://spencerhenegar:baxter@ecotrack.klb9b.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
