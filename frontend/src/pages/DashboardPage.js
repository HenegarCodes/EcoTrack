import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ActivityLogForm from '../components/ActivityLog.js'; // Import the ActivityLogForm component
import './DashboardPage.css';

// Register the components 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardPage() {  // Rename the function to match the file name
    const carbonFootprintData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // X-axis labels
        datasets: [
            {
                label: 'Carbon Footprint',
                data: [300, 250, 400, 250], // Data points
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const handleActivitySubmit = async (newActivity) => {
        console.log('New activity logged:', newActivity);
    
        try {
            const response = await fetch('/api/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newActivity),
            });
    
            if (response.ok) {
                console.log('Activity logged successfully');
            } else {
                console.error('Failed to log activity');
            }
        } catch (error) {
            console.error('Error logging activity:', error);
        }
    };
    

    return (
        <div className="dashboard-page">
            <h1>User Dashboard</h1>
            <section className="carbon-footprint-summary">
                <h2>Carbon Footprint Summary</h2>
                <Line data={carbonFootprintData} />
            </section>
            
            <section className="activity-log">
                <h2>Log a New Activity</h2>
                <ActivityLogForm onSubmit={handleActivitySubmit} />
            </section>
        </div>
    );
}

export default DashboardPage;
