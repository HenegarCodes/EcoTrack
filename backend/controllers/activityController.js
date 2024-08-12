const asyncHandler = require('express-async-handler');
const Activity = require('../models/Activity');

// @desc    Create a new activity
// @route   POST /api/activities
// @access  Private
const createActivity = asyncHandler(async (req, res) => {
    const { type, description, duration, carbonFootprint } = req.body;

    const activity = new Activity({
        user: req.user._id,
        type,
        description,
        duration,
        carbonFootprint,
    });

    const createdActivity = await activity.save();
    res.status(201).json(createdActivity);
});

// @desc    Get activities for the logged-in user
// @route   GET /api/activities/myactivities
// @access  Private
const getMyActivities = asyncHandler(async (req, res) => {
    const activities = await Activity.find({ user: req.user._id });
    res.json(activities);
});

// @desc    Get all activities (admin only)
// @route   GET /api/activities
// @access  Private/Admin
const getAllActivities = asyncHandler(async (req, res) => {
    const activities = await Activity.find({});
    res.json(activities);
});

module.exports = {
    createActivity,
    getMyActivities,
    getAllActivities,
};
