import api from './api';

export const submitContactForm = (formData) => {
  return api.post('/contact', formData);
};

export const getContactMessages = () => {
  return api.get('/contact');
};

export const updateMessageStatus = (id, status) => {
  return api.put(`/contact/${id}`, { status });
};