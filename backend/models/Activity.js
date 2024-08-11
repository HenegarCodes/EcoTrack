const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requiured: true,
    },
    type: {
        type: String,
        enum: ['transportation', 'energy', 'food', 'waste', 'other'], // You can customize these types
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Duration in minutes, if applicable (e.g., for transportation)
        default: 0,
    },
    carbonFootprint: {
        type: Number, // Carbon footprint value in kg CO2e
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
