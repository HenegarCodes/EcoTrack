import React from 'react';
//import './Homepage.css'; // Assuming  have a CSS file for styling

function Homepage() {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to EcoTrack</h1>
                    <p>Track your carbon footprint and make sustainable choices today.</p>
                    <button className="cta-button">Get Started</button>
                </div>
                <div className="hero-image">
                    <img src="path/to/hero-image.jpg" alt="Eco-friendly illustration" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose EcoTrack?</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>Track Your Impact</h3>
                        <p>Monitor your carbon footprint across various activities.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Make Better Choices</h3>
                        <p>Get personalized tips on how to reduce your impact.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Join a Community</h3>
                        <p>Connect with others who are committed to sustainability.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-list">
                    <div className="testimonial-item">
                        <p>"EcoTrack has changed the way I think about my carbon footprint!"</p>
                        <h4>- Jane Doe</h4>
                    </div>
                    <div className="testimonial-item">
                        <p>"I love how easy it is to track and improve my sustainability habits."</p>
                        <h4>- John Smith</h4>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 EcoTrack. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;
