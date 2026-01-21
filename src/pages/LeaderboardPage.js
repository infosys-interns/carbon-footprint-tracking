import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../services/api';
import Navbar from '../components/Navbar';

const LeaderboardPage = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchLeaderboard();
                setLeaders(data);
            } catch (error) {
                console.error("Failed to load leaderboard");
            }
        };
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mt-5" style={{ maxWidth: '700px' }}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">🏆 Eco-Champions Leaderboard</h2>
                    <p className="text-muted">Users with the lowest carbon footprint this month.</p>
                </div>

                <div className="card shadow border-0">
                    <div className="card-body p-0">
                        <table className="table table-hover mb-0 text-center">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th className="py-3">Rank</th>
                                    <th className="py-3">User</th>
                                    <th className="py-3">Total CO2 (kg)</th>
                                    <th className="py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaders.map((user, index) => (
                                    <tr key={index} className={index === 0 ? "table-warning fw-bold" : ""}>
                                        <td className="py-3">
                                            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                                        </td>
                                        <td className="py-3">{user.name}</td>
                                        <td className="py-3">{user.totalScore.toFixed(2)}</td>
                                        <td className="py-3">
                                            {user.totalScore < 100 ? 
                                                <span className="badge bg-success">Eco-Friendly</span> : 
                                                <span className="badge bg-warning text-dark">Average</span>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {leaders.length === 0 && <p className="text-center p-4">No data available yet.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;