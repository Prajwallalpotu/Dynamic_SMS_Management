// src/services/auth.js
import axios from './api';

export const login = async (username, password) => {
    try {
        const { data } = await axios.post('/auth/login', { username, password });
        localStorage.setItem('token', data.token);
        return true;
    } catch (err) {
        console.error("Login failed", err);
        return false;
    }
};

export const getToken = () => localStorage.getItem('token');
export const logout = () => localStorage.removeItem('token');
