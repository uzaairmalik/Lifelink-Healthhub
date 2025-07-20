import api from './api';

export const getDoctors = (specialization, location) => {
  return api.get('/doctors', {
    params: { specialization, location }
  });
};

export const getDoctorById = (id) => {
  return api.get(`/doctors/${id}`);
};

export const addReview = (doctorId, reviewData) => {
  return api.post(`/doctors/${doctorId}/reviews`, reviewData);
};