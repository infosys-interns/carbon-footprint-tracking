import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-dark bg-dark mb-4 shadow">
            <div className="container">
                {/* Brand Logo */}
                <span 
                    className="navbar-brand mb-0 h1" 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => navigate('/survey')}
                >
                    🌱 CarbonTracker
                </span>

                {/* Navigation Links */}
                <div className="d-flex gap-3 align-items-center">
                    <button 
                        onClick={() => navigate('/survey')} 
                        className="btn btn-link text-white text-decoration-none"
                    >
                        Calculator
                    </button>
                    <button 
                        onClick={() => navigate('/history')} 
                        className="btn btn-link text-white text-decoration-none"
                    >
                        History
                    </button>
                    <button 
                        onClick={() => navigate('/goals')} 
                        className="btn btn-link text-white text-decoration-none"
                    >
                        Goals 🎯
                    </button>
                    <button 
                        onClick={() => navigate('/leaderboard')} 
                        className="btn btn-link text-warning text-decoration-none fw-bold"
                    >
                        Leaderboard 🏆
                    </button>
                    <button 
                        onClick={() => navigate('/shop')} 
                        className="btn btn-link text-white text-decoration-none"
                    >
                        Shop 🛍️
                    </button>
                </div>

                {/* Logout Button */}
                <button 
                    onClick={handleLogout}
                    className="btn btn-danger btn-sm"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;