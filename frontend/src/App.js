import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';  // Adjust the path based on your project structure
import Dashboard from './components/Dashboard';
import Challenge from './components/Challenge';

function App() {
    return (
        <Router>
            <Routes>
                {/* Define a route for the homepage */}
                <Route path="/" element={<Homepage />} />

                {/* Other routes for your application */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/challenge" element={<Challenge />} />

                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
