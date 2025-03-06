// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Update API_URL to match your backend server
const API_URL = 'http://172.16.246.177:3000';

// Configure axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_URL;

// Add this to see detailed error information
const handleError = (err) => {
  console.error('Error details:', {
    message: err.message,
    response: err.response?.data,
    status: err.response?.status,
    url: err.config?.url
  });
  throw err;
};

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in when the app starts
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('/user/dashboard'); // Updated endpoint
        setUser(response.data.user); // Update to match backend response
      } catch (err) {
        setUser(null);
      }
    };
    
    checkAuthStatus();
  }, []);

  const register = async (username, email, password) => {
    try {
      setIsLoading(true);
      console.log('Sending registration request:', {
        url: `${API_URL}/user/register`,
        data: { username, email, password }
      });
      
      const response = await axios.post('/user/register', {
        username,
        email,
        password
      });
      
      console.log('Registration response:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Full registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post('/user/login', {
        email,
        password
      });
      
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error.response?.data);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/user/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      register,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
