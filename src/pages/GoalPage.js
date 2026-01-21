import React, { useEffect, useState } from 'react';
import { setGoal, getGoalStatus } from '../services/api';
import Navbar from '../components/Navbar';

const GoalPage = () => {
    const [target, setTarget] = useState('');
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState('');

    // Load current status when page opens
    useEffect(() => {
        loadStatus();
    }, []);

    const loadStatus = async () => {
        try {
            const data = await getGoalStatus();
            if (data !== "No goal set") {
                setStatus(data);
            }
        } catch (error) {
            console.error("Error loading goal", error);
        }
    };

    const handleSetGoal = async (e) => {
        e.preventDefault();
        try {
            await setGoal(parseFloat(target));
            setMessage("Goal set successfully! 🎯");
            setTarget('');
            loadStatus(); // Refresh the progress bar
        } catch (error) {
            setMessage("Failed to set goal.");
        }
    };

    // Calculate percentage (capped at 100% so bar doesn't break)
    const getPercentage = () => {
        if (!status) return 0;
        const percent = (status.actual / status.target) * 100;
        return Math.min(percent, 100);
    };

    const getBarColor = () => {
        const p = getPercentage();
        if (p < 50) return 'bg-success'; // Green
        if (p < 80) return 'bg-warning'; // Yellow
        return 'bg-danger';              // Red
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">🎯 Monthly Carbon Goal</h2>

                {/* 1. SET GOAL CARD */}
                <div className="card shadow-sm p-4 mb-4">
                    <h5>Set Your Target Limit (kg CO2)</h5>
                    <form onSubmit={handleSetGoal} className="d-flex gap-2 mt-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="e.g. 150" 
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary">Set Goal</button>
                    </form>
                    {message && <p className="text-success mt-2">{message}</p>}
                </div>

                {/* 2. PROGRESS CARD */}
                {status ? (
                    <div className="card shadow-sm p-4 text-center">
                        <h4>Current Status</h4>
                        <div className="progress mt-3" style={{ height: '30px' }}>
                            <div 
                                className={`progress-bar ${getBarColor()}`} 
                                role="progressbar" 
                                style={{ width: `${getPercentage()}%` }}
                            >
                                {Math.round(getPercentage())}%
                            </div>
                        </div>
                        <p className="mt-3 fs-5">
                            You have emitted <b>{status.actual} kg</b> of your <b>{status.target} kg</b> limit.
                        </p>
                        {status.actual > status.target && (
                            <div className="alert alert-danger mt-2">
                                ⚠️ Warning: You have exceeded your monthly goal!
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="alert alert-info text-center">
                        You haven't set a goal for this month yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoalPage;