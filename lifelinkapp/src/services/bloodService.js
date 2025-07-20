// src/services/bloodService.js

// Mock data - in a real app, these would be API calls to your backend
const bloodCompatibilityData = {
  'O-': {
    canDonateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    canReceiveFrom: ['O-']
  },
  'O+': {
    canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
    canReceiveFrom: ['O-', 'O+']
  },
  'A-': {
    canDonateTo: ['A-', 'A+', 'AB-', 'AB+'],
    canReceiveFrom: ['O-', 'A-']
  },
  'A+': {
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['O-', 'O+', 'A-', 'A+']
  },
  'B-': {
    canDonateTo: ['B-', 'B+', 'AB-', 'AB+'],
    canReceiveFrom: ['O-', 'B-']
  },
  'B+': {
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['O-', 'O+', 'B-', 'B+']
  },
  'AB-': {
    canDonateTo: ['AB-', 'AB+'],
    canReceiveFrom: ['O-', 'A-', 'B-', 'AB-']
  },
  'AB+': {
    canDonateTo: ['AB+'],
    canReceiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
  }
};

const donationProcessData = {
  steps: [
    {
      title: "Registration",
      description: "Complete the donor registration with your personal information."
    },
    {
      title: "Health History",
      description: "Answer questions about your health, travel, and medications."
    },
    {
      title: "Mini Physical",
      description: "Check your temperature, blood pressure, pulse, and hemoglobin."
    },
    {
      title: "Donation",
      description: "Actual blood donation takes about 8-10 minutes."
    },
    {
      title: "Refreshment",
      description: "Enjoy snacks and drinks while you rest for 10-15 minutes."
    }
  ],
  duration: "1 hour",
  frequency: "Every 56 days for whole blood donations"
};

const bloodDonorsData = [
  { id: 1, name: "John Doe", bloodType: "O+", lastDonation: "2023-05-15", location: "New York" },
  { id: 2, name: "Jane Smith", bloodType: "A-", lastDonation: "2023-06-20", location: "Los Angeles" },
  { id: 3, name: "Mike Johnson", bloodType: "B+", lastDonation: "2023-04-10", location: "Chicago" },
  { id: 4, name: "Sarah Williams", bloodType: "AB+", lastDonation: "2023-07-05", location: "Houston" },
  { id: 5, name: "David Brown", bloodType: "O-", lastDonation: "2023-06-30", location: "Phoenix" }
];

// Simulate API calls with delays
const simulateApiCall = (data, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Service functions
export const getBloodCompatibility = async () => {
  try {
    // In a real app: return await axios.get('/api/blood/compatibility');
    return await simulateApiCall(bloodCompatibilityData);
  } catch (error) {
    console.error('Error fetching blood compatibility:', error);
    throw error;
  }
};

export const getDonationProcess = async () => {
  try {
    // In a real app: return await axios.get('/api/donation/process');
    return await simulateApiCall(donationProcessData, 600);
  } catch (error) {
    console.error('Error fetching donation process:', error);
    throw error;
  }
};

export const getBloodDonors = async () => {
  try {
    // In a real app: return await axios.get('/api/donors');
    return await simulateApiCall(bloodDonorsData, 1000);
  } catch (error) {
    console.error('Error fetching blood donors:', error);
    throw error;
  }
};

// For real API implementation, you might have something like:
/*
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const getBloodCompatibility = async () => {
  const response = await api.get('/blood/compatibility');
  return response.data;
};
*/