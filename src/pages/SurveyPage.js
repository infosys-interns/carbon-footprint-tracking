import React, { useState } from 'react';
import { calculateFootprint } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SurveyPage = () => {
    const [formData, setFormData] = useState({
        transportMode: 'car',
        kilometers: 0,
        dietType: 'meat',
        energyUsage: 0
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await calculateFootprint(formData);
            navigate('/result', { state: { result } });
        } catch (error) {
            alert("Failed to calculate.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="card shadow mx-auto p-4" style={{ maxWidth: '600px' }}>
                    <h2 className="text-center mb-4">🌿 Carbon Survey</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label className="form-label">Transport Mode</label>
                            <select name="transportMode" className="form-select" value={formData.transportMode} onChange={handleChange}>
                                <option value="car">Car</option>
                                <option value="bus">Bus</option>
                                <option value="bike">Bike</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Kilometers Traveled (Monthly)</label>
                            <input type="number" name="kilometers" className="form-control" value={formData.kilometers} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Diet Type</label>
                            <select name="dietType" className="form-select" value={formData.dietType} onChange={handleChange}>
                                <option value="meat">Heavy Meat Eater</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Monthly Energy Usage (kWh)</label>
                            <input type="number" name="energyUsage" className="form-control" value={formData.energyUsage} onChange={handleChange} required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-2">
                            Calculate My Footprint
                        </button>
                        <button type="button" onClick={() => navigate('/history')} className="btn btn-secondary w-100">
                            View Past Calculations
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SurveyPage;