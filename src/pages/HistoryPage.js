import React, { useEffect, useState } from 'react';
import { fetchHistory } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const data = await fetchHistory();
                setHistory(data);
            } catch (error) {
                navigate('/');
            }
        };
        loadHistory();
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>📊 Calculation History</h2>
                    <button onClick={() => navigate('/survey')} className="btn btn-outline-primary">
                        Back to Survey
                    </button>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body p-0">
                        {history.length === 0 ? (
                            <p className="text-center p-4">No history found.</p>
                        ) : (
                            <table className="table table-striped table-hover mb-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Date</th>
                                        <th>Total (kg)</th>
                                        <th>Transport</th>
                                        <th>Food</th>
                                        <th>Energy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((log) => (
                                        <tr key={log.id}>
                                            <td>{new Date(log.date).toLocaleDateString()}</td>
                                            <td className="fw-bold">{log.totalEmission}</td>
                                            <td>{log.transportEmission}</td>
                                            <td>{log.foodEmission}</td>
                                            <td>{log.energyEmission}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;