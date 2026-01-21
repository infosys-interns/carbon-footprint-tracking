import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePage = () => {
    const navigate = useNavigate();

    // --- CONFIGURATION: Add your image file names here ---
    const heroImages = [
        "/images/home.png",       // Image 1 (Original)
        "/images/i1.jpg",      // Image 2 (Change these names to match your files)
        "/images/i3.jpeg",      // Image 3
        "/images/i2.jpeg",      // Image 4
        "/images/i4.jpeg",      // Image 5
        "/images/i5.jpeg"       // Image 6
    ];

    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effect to cycle images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000); // 3000ms = 3 seconds delay

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
            
            {/* --- 1. NAVIGATION BAR --- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold text-success fs-4" href="/">
                        <i className="bi bi-globe-americas me-2"></i>CarbonTracker
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fw-medium">
                            <li className="nav-item"><a className="nav-link text-dark" href="#hero">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-dark" href="#about">About Us</a></li>
                            <li className="nav-item"><a className="nav-link text-dark" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
                        </ul>
                        <div className="ms-3">
                            <button onClick={() => navigate('/login')} className="btn btn-outline-success me-2 rounded-pill px-4">Login</button>
                            <button onClick={() => navigate('/register')} className="btn btn-success rounded-pill px-4">Register</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- 2. HERO SECTION --- */}
            <header id="hero" className="d-flex align-items-center" style={{ minHeight: '85vh', background: 'linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="display-4 fw-bold text-dark mb-3">
                                Small Steps. <br />
                                <span className="text-success">Big Impact.</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                Join the global movement to reduce carbon emissions. Track your daily footprint, complete monthly goals, and shop for sustainable alternatives—all in one place.
                            </p>
                            <div className="d-flex gap-3">
                                <button onClick={() => navigate('/register')} className="btn btn-success btn-lg rounded-pill shadow-sm px-5 hover-effect">
                                    Get Started
                                </button>
                                <button onClick={() => navigate('/login')} className="btn btn-outline-dark btn-lg rounded-pill px-5">
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            {/* DYNAMIC IMAGE SLIDESHOW */}
                            <img 
                                key={currentImageIndex} // Key ensures animation restarts on change
                                src={heroImages[currentImageIndex]} 
                                alt="Sustainability Slideshow" 
                                className="img-fluid rounded-4 shadow-lg fade-in-animation" 
                                style={{ 
                                    width: '100%', 
                                    height: '500px',      // Fixed height prevents page jumping
                                    objectFit: 'cover'    // Ensures image fills area without stretching
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 3. ABOUT US SECTION --- */}
            <section id="about" className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h6 className="text-uppercase text-success fw-bold letter-spacing">Who We Are</h6>
                            <h2 className="fw-bold mb-4">Empowering You to Live Sustainably</h2>
                            <p className="text-muted">
                                CarbonTracker is more than just a calculator; it is a companion for your eco-friendly journey. 
                                We believe that individual actions, when multiplied by millions, can transform the world.
                            </p>
                            <p className="text-muted">
                                Our platform combines data analytics with gamification to make saving the planet fun and rewarding. 
                                Whether you are tracking your commute or buying a bamboo toothbrush, every choice counts.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="p-5 bg-light rounded-4 text-center">
                                <i className="bi bi-tree-fill text-success" style={{ fontSize: '5rem' }}></i>
                                <h4 className="mt-3">10,000+ kg CO2 Saved</h4>
                                <p className="text-muted">By our community members this year.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. FEATURES SECTION --- */}
            <section id="features" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase text-success fw-bold letter-spacing">What We Offer</h6>
                        <h2 className="fw-bold">Everything You Need to Go Green</h2>
                    </div>
                    
                    <div className="row g-4">
                        {/* Feature 1 */}
                        <div className="col-md-3">
                            <div className="feature-card p-4 rounded-4 bg-white h-100 shadow-sm">
                                <i className="bi bi-calculator fs-1 text-primary mb-3"></i>
                                <h4>Calculator</h4>
                                <p className="text-muted small">Track emissions from transport, food, and energy instantly.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="col-md-3">
                            <div className="feature-card p-4 rounded-4 bg-white h-100 shadow-sm">
                                <i className="bi bi-trophy-fill fs-1 text-warning mb-3"></i>
                                <h4>Leaderboard</h4>
                                <p className="text-muted small">Compete with friends and become the top Eco-Champion.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="col-md-3">
                            <div className="feature-card p-4 rounded-4 bg-white h-100 shadow-sm">
                                <i className="bi bi-cart-check-fill fs-1 text-success mb-3"></i>
                                <h4>Eco-Shop</h4>
                                <p className="text-muted small">Discover and buy sustainable products directly from our app.</p>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="col-md-3">
                            <div className="feature-card p-4 rounded-4 bg-white h-100 shadow-sm">
                                <i className="bi bi-bullseye fs-1 text-danger mb-3"></i>
                                <h4>Monthly Goals</h4>
                                <p className="text-muted small">Set reduction targets and track your progress in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. CONTACT SECTION --- */}
            <section id="contact" className="py-5 bg-dark text-white">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-lg-8">
                            <h2 className="fw-bold">Get in Touch</h2>
                            <p className="text-secondary">Have questions or suggestions? We'd love to hear from you.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center mb-4">
                            <div className="p-3 border border-secondary rounded-3">
                                <i className="bi bi-envelope-at fs-2 text-success mb-2"></i>
                                <h5>Email Us</h5>
                                <p className="mb-0 text-secondary">support@carbontracker.com</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <div className="p-3 border border-secondary rounded-3">
                                <i className="bi bi-telephone fs-2 text-success mb-2"></i>
                                <h5>Call Us</h5>
                                <p className="mb-0 text-secondary">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <div className="p-3 border border-secondary rounded-3">
                                <i className="bi bi-geo-alt fs-2 text-success mb-2"></i>
                                <h5>Visit Us</h5>
                                <p className="mb-0 text-secondary">Tech Park, Hyderabad, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. FOOTER --- */}
            <footer className="bg-black text-white py-3">
                <div className="container text-center">
                    <p className="mb-0 small text-secondary">&copy; 2026 CarbonTracker. Built for a better tomorrow.</p>
                </div>
            </footer>

            {/* --- STYLES --- */}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
                
                .hover-effect:hover { transform: scale(1.05); transition: 0.3s; }
                
                /* Fade In Animation for Slideshow */
                .fade-in-animation {
                    animation: fadeIn 1s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .feature-card { transition: 0.3s; }
                .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
                `}
            </style>
        </div>
    );
};

export default HomePage;