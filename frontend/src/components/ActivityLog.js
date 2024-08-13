import React, { useState } from 'react';

function ActivityLogForm({ onSubmit }) {
    const [activityType, setActivityType] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [carbonFootprint, setCarbonFootprint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newActivity = {
            activityType,
            description,
            duration,
            carbonFootprint
        };

        // Pass the activity data to the parent component or API
        onSubmit(newActivity);

        // Clear the form
        setActivityType('');
        setDescription('');
        setDuration('');
        setCarbonFootprint('');
    };

    return (
        <div className="activity-log-form">
            <h2>Log a New Activity</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="activityType">Activity Type</label>
                    <select
                        id="activityType"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                        required
                    >
                        <option value="">Select an activity</option>
                        <option value="transportation">Transportation</option>
                        <option value="energy">Energy Usage</option>
                        <option value="food">Food Consumption</option>
                        <option value="waste">Waste Management</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the activity"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="duration">Duration (minutes)</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Enter duration in minutes"
                    />
                </div>

                <div>
                    <label htmlFor="carbonFootprint">Carbon Footprint (kg CO2e)</label>
                    <input
                        type="number"
                        id="carbonFootprint"
                        value={carbonFootprint}
                        onChange={(e) => setCarbonFootprint(e.target.value)}
                        placeholder="Estimated carbon footprint"
                    />
                </div>

                <button type="submit">Log Activity</button>
            </form>
        </div>
    );
}

export default ActivityLogForm;
