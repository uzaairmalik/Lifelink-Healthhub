import api from './api';

export const bookAppointment = (appointmentData) => {
  return api.post('/appointments', appointmentData);
};

export const getUserAppointments = (status) => {
  return api.get('/appointments', { params: { status } });
};

export const updateAppointmentStatus = (id, status) => {
  return api.put(`/appointments/${id}`, { status });
};