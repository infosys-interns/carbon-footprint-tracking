import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SurveyPage from './pages/SurveyPage';
import ResultPage from './pages/ResultPage';
import HistoryPage from './pages/HistoryPage';
import GoalPage from './pages/GoalPage';
import LeaderboardPage from './pages/LeaderboardPage'; // 1. Import new page
import MarketplacePage from './pages/MarketplacePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} /> {/* 2. Add Route */}
        <Route path="/shop" element={<MarketplacePage />} />
      </Routes>
    </Router>
  );
}

export default App;