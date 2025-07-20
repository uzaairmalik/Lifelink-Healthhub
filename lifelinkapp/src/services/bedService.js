import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export const applyForBed = async (applicationData) => {
  try {
    const response = await api.post('/bed-applications', applicationData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Submission error:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || 'Submission failed',
      errors: error.response?.data?.errors || {}
    };
  }
};