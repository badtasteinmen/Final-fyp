// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Set the base URL for the API (replace with your actual API URL)
const API_URL = 'http://192.168.0.202:3000';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in when the app starts
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`${API_URL}/dashboard`);
        setUser(response.data); // Store user data in state if logged in
      } catch (err) {
        setUser(null); // Set user to null if not logged in
      }
    };
    
    checkAuthStatus();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { username, password }
      );
      setUser(response.data); // Store user data in state upon successful login
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${API_URL}/auth/logout`);
      setUser(null); // Clear user data on logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const register = async (username, email, password) => {
    try {
      await axios.post(`${API_URL}/auth/register`, { username, email, password });
      // After registration, you can auto-login or redirect to login page
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
