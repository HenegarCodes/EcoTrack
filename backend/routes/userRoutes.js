const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// Route to get user profile (protected route)
router.get('/profile', protect, getUserProfile);

router.get('/test', async (req, res) => {
    try {
      const users = await User.find(); // Attempt to retrieve users from MongoDB
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;
