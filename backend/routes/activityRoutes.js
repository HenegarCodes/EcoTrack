const express = require('express');
const router = express.Router();
const { createActivity, getMyActivities, getAllActivities } = require('../controllers/activityController');
const { protect, admin } = require('../middleware/authMiddleware');

// Routes for activities
router.route('/')
    .post(protect, createActivity) // Only logged-in users can create activities
    .get(protect, admin, getAllActivities); // Only admin can get all activities

router.route('/myactivities')
    .get(protect, getMyActivities); // Logged-in users can get their own activities

module.exports = router;
