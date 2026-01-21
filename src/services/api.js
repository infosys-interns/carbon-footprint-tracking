import axios from 'axios';

const API_URL = 'http://localhost:8081/auth'; // Pointing to your Auth Controller

// 1. Login Function
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        
        // If login works, save the token to browser storage
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 2. Helper to get the stored token
export const getToken = () => {
    return localStorage.getItem('token');
};

// 3. Send Survey Data to Backend
export const calculateFootprint = async (surveyData) => {
    try {
        const token = getToken(); // Get the saved token
        const response = await axios.post('http://localhost:8081/api/carbon/calculate', surveyData, {
            headers: {
                'Authorization': `Bearer ${token}` // Attach token to request
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 4. Fetch History
export const fetchHistory = async () => {
    try {
        const token = getToken();
        const response = await axios.get('http://localhost:8080/api/carbon/history', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 5. Register User
export const registerUser = async (userData) => {
    try {
        // userData should contain { name, email, password, role }
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 6. Set Goal
export const setGoal = async (target) => {
    try {
        const token = getToken();
        const response = await axios.post('http://localhost:8081/api/goals/set', 
            { target }, 
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 7. Get Goal Status
export const getGoalStatus = async () => {
    try {
        const token = getToken();
        const response = await axios.get('http://localhost:8081/api/goals/status', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 8. Get Leaderboard
export const fetchLeaderboard = async () => {
    try {
        const token = getToken();
        const response = await axios.get('http://localhost:8081/api/carbon/leaderboard', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 9. Fetch Products
export const fetchProducts = async () => {
    try {
        const token = getToken();
        // Note: Products are public, but sending token is fine too
        const response = await axios.get('http://localhost:8081/api/products', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};