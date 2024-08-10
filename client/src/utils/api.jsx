import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Add more API functions for registration, product fetching, etc.

export default api;
