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

// Register the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
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

    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <section className="carbon-footprint-summary">
                <h2>Carbon Footprint Summary</h2>
                <Line data={carbonFootprintData} />
            </section>
        </div>
    );
}

export default Dashboard;
