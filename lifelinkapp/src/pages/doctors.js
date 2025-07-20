import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Doctors = () => {
  // Sample doctor data with remote images
  const sampleDoctors = [
    {
      id: 1,
      name: "Dr. Sarah ",
      specialization: "Cardiology",
      location: "Islamabad",
      rating: 4.9,
      experience: "12 years",
      image: "./img/img2.jpg",
      bio: "Board-certified cardiologist specializing in preventive care and heart disease management."
    },
    {
      id: 2,
      name: "Dr. Ali",
      specialization: "Neurology",
      location: "Rawal Pindi",
      rating: 4.7,
      experience: "8 years",
      image: "./img/dr.Usman.jpg",
      bio: "Neurology specialist with expertise in migraine treatment and cognitive disorders."
    },
    {
      id: 3,
      name: "Dr. Aisha Rahman",
      specialization: "Pediatrics",
      location: "Chicago",
      rating: 4.8,
      experience: "10 years",
      image: "./img/im1.jpg",
      bio: "Pediatrician dedicated to providing compassionate care for children of all ages."
    },
    {
      id: 4,
      name: "Dr. Asma",
      specialization: "Orthopedics",
      location: "Abbottabad",
      rating: 4.6,
      experience: "15 years",
      image: "./img/jp3.jpg",
      bio: "Orthopedic surgeon specializing in sports injuries and joint replacements."
    },
    {
      id: 5,
      name: "Dr. Humma",
      specialization: "Dermatology",
      location: "Karachi",
      rating: 4.9,
      experience: "7 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Dermatologist focused on skin cancer prevention and cosmetic dermatology."
    },
    {
      id: 6,
      name: "Dr. Komal",
      specialization: "General Physician",
      location: "Peshawar",
      rating: 4.7,
      experience: "9 years",
      image: "./img/jp5.jpg",
      bio: "Primary care physician providing comprehensive health services for adults."
    },
    {
      id: 7,
      name: "Dr. Fatima Ahmed",
      specialization: "Obstetrics & Gynecology",
      location: "lahore",
      rating: 4.8,
      experience: "11 years",
      image: "./img/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg",
      bio: "OB/GYN providing compassionate care for women at all stages of life."
    },
    {
      id: 8,
      name: "Dr. rabia sultan",
      specialization: "Gynecology",
      location: "lahore",
      rating: 4.8,
      experience: "11 years",
      image: "./img/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg",
      bio: "OB/GYN providing compassionate care for women at all stages of life."
    },
    {
      id: 9,
      name: "Dr. Aisha",
      specialization: "Psychiatry",
      location: "faislabad",
      rating: 4.5,
      experience: "14 years",
      image: "./img/jp3.jpg",
      bio: "Psychiatrist specializing in anxiety, depression, and mood disorders."
    }
  ];

  // State management
  const [searchFilters, setSearchFilters] = useState({
    specialization: '',
    location: '',
    name: ''
  });
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingStatus, setBookingStatus] = useState({
    loading: false,
    error: null
  });
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    contactNumber: '',
    appointmentDate: '',
    preferredTime: '',
    notes: ''
  });

  // Image fallbacks
  const defaultDoctorImage = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';

  // Load sample data
  useEffect(() => {
    setLoading(true);
    setDoctors(sampleDoctors);
    setFilteredDoctors(sampleDoctors);
    setLoading(false);
  }, []);

  // Search and filter functionality
  const handleSearch = (e) => {
    e.preventDefault();
    const { specialization, location, name } = searchFilters;
    
    const results = doctors.filter(doctor => {
      const matchesSpecialization = specialization ? 
        doctor.specialization.toLowerCase().includes(specialization.toLowerCase()) : true;
      const matchesLocation = location ? 
        doctor.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesName = name ?
        doctor.name.toLowerCase().includes(name.toLowerCase()) : true;
      return matchesSpecialization && matchesLocation && matchesName;
    });
    
    setFilteredDoctors(results);
  };

  const handleReset = () => {
    setSearchFilters({ specialization: '', location: '', name: '' });
    setFilteredDoctors(doctors);
  };

  // Appointment booking
  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setBookingStatus({ loading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and close modal on success
      setAppointmentForm({
        patientName: '',
        contactNumber: '',
        appointmentDate: '',
        preferredTime: '',
        notes: ''
      });
      setShowModal(false);
      alert(`Appointment booked successfully with ${selectedDoctor.name}`);
    } catch (error) {
      console.error('Booking error:', error);
      setBookingStatus({ loading: false, error: 'Failed to book appointment. Please try again.' });
    } finally {
      setBookingStatus(prev => ({ ...prev, loading: false }));
    }
  };

  // Modal controls
  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setShowModal(false);
    setBookingStatus({ loading: false, error: null });
  };

  return (
    <div className="doctors-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo d-flex align-items-center">
            <img 
              src="/img/logo1.png" 
              alt="LifeLinkHealthHub Logo" 
              className="heart-img me-2" 
              loading="lazy" 
              width="40"
            />
            <Link to="/" className="navbar-brand">
              <i className="fas fa-heartbeat me-2"></i>LifeLinkHealthHub
            </Link>
          </div>
          <nav className="main-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/firstAid">FirstAid</Link></li>
              <li><Link to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link className="active" to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="doctors-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <h2 className="text-center mb-3">Find a Doctor</h2>
              <p className="text-center text-muted mb-4">
                Browse our list of qualified healthcare professionals or use the filters to find specific specialists
              </p>
            </div>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-5 p-4 bg-light rounded">
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Doctor Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  value={searchFilters.name}
                  onChange={(e) => setSearchFilters({...searchFilters, name: e.target.value})}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Specialization</label>
                <select
                  className="form-select"
                  value={searchFilters.specialization}
                  onChange={(e) => setSearchFilters({...searchFilters, specialization: e.target.value})}
                >
                  <option value="">All Specialties</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="General Physician">General Physician</option>
                  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
                  <option value="Psychiatry">Psychiatry</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Location</label>
                <select
                  className="form-select"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                >
                  <option value="">All Locations</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Pindi">Rawalpindi</option>
                  <option value="Faislabad">Faislabad</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Mansehra">Mansehra</option>
                </select>
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button type="submit" className="btn btn-primary me-2 w-100">
                  <i className="fas fa-search me-2"></i>Search
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary w-100" 
                  onClick={handleReset}
                  disabled={!searchFilters.specialization && !searchFilters.location && !searchFilters.name}
                >
                  <i className="fas fa-undo me-2"></i>Reset
                </button>
              </div>
            </div>
          </form>

          {/* Doctors count */}
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Doctor' : 'Doctors'} Found
            </h5>
            {filteredDoctors.length !== doctors.length && (
              <button 
                className="btn btn-sm btn-link text-primary" 
                onClick={handleReset}
              >
                Show All Doctors
              </button>
            )}
          </div>

          {/* Doctors list */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading doctors...</p>
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-5">
              <div className="alert alert-warning">
                <i className="fas fa-exclamation-circle me-2"></i>
                No doctors found matching your criteria
              </div>
              <button className="btn btn-primary" onClick={handleReset}>
                Show All Doctors
              </button>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredDoctors.map(doctor => (
                <div className="col" key={doctor.id}>
                  <div className="card doctor-card h-100 shadow-sm border-0">
                    <div className="card-img-top-container">
                      <img 
                        src={doctor.image} 
                        className="card-img-top doctor-image" 
                        alt={doctor.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultDoctorImage;
                        }}
                      />
                      <div className="specialization-badge">
                        {doctor.specialization}
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{doctor.name}</h5>
                      <div className="doctor-meta mb-3">
                        <div className="meta-item">
                          <i className="fas fa-map-marker-alt text-muted me-2"></i>
                          <span>{doctor.location}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fas fa-star text-warning me-2"></i>
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fas fa-briefcase text-muted me-2"></i>
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      <p className="card-text text-muted small mb-3">
                        {doctor.bio}
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <button 
                        className="btn btn-primary w-100" 
                        onClick={() => openModal(doctor)}
                      >
                        <i className="fas fa-calendar-check me-2"></i>Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Appointment Modal */}
      {showModal && selectedDoctor && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="fas fa-calendar-plus me-2"></i>
                  Book Appointment with Dr. {selectedDoctor.name}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-center mb-4">
                      <img 
                        src={selectedDoctor.image} 
                        className="img-fluid rounded-circle mb-3 doctor-modal-image"
                        alt={selectedDoctor.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultDoctorImage;
                        }}
                      />
                      <h5>Dr. {selectedDoctor.name}</h5>
                      <p className="text-muted">{selectedDoctor.specialization}</p>
                      <div className="d-flex justify-content-center mb-2">
                        <i className="fas fa-map-marker-alt text-muted me-2"></i>
                        <span>{selectedDoctor.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    {bookingStatus.error && (
                      <div className="alert alert-danger">{bookingStatus.error}</div>
                    )}
                    <form onSubmit={handleAppointmentSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Your Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={appointmentForm.patientName}
                          onChange={(e) => setAppointmentForm({...appointmentForm, patientName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={appointmentForm.contactNumber}
                          onChange={(e) => setAppointmentForm({...appointmentForm, contactNumber: e.target.value})}
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Appointment Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={appointmentForm.appointmentDate}
                            onChange={(e) => setAppointmentForm({...appointmentForm, appointmentDate: e.target.value})}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Preferred Time</label>
                          <select
                            className="form-select"
                            value={appointmentForm.preferredTime}
                            onChange={(e) => setAppointmentForm({...appointmentForm, preferredTime: e.target.value})}
                            required
                          >
                            <option value="">Select time</option>
                            <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                            <option value="Afternoon (1PM-5PM)">Afternoon (1PM-5PM)</option>
                            <option value="Evening (6PM-9PM)">Evening (6PM-9PM)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Reason for Visit (Optional)</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Briefly describe your symptoms or reason for appointment"
                          value={appointmentForm.notes}
                          onChange={(e) => setAppointmentForm({...appointmentForm, notes: e.target.value})}
                        ></textarea>
                      </div>
                      <div className="d-grid gap-2">
                        <button 
                          type="submit" 
                          className="btn btn-primary" 
                          disabled={bookingStatus.loading}
                        >
                          {bookingStatus.loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-calendar-check me-2"></i>
                              Confirm Appointment
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src="/img/logo1.png" 
                  alt="LifeLinkHealthHub Logo" 
                  className="footer-logo me-2"
                  width="40"
                />
                <span className="h5 mb-0">LifeLinkHealthHub</span>
              </div>
              <p className="text-muted">
                Committed to providing quality healthcare services to our community.
              </p>
              <div className="social-links">
                {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                  <Link 
                    key={icon}
                    to="#" 
                    className="text-white me-3"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="col-md-2 mb-4 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-muted">Home</Link></li>
                <li className="mb-2"><Link to="/Doctors" className="text-muted">Doctors</Link></li>
                <li className="mb-2"><Link to="/bloodGroups" className="text-muted">Blood Groups</Link></li>
                <li className="mb-2"><Link to="/SymptomsChecker" className="text-muted">Symptoms Checker</Link></li>
              </ul>
            </div>
            
            <div className="col-md-3">
              <h5>Contact Information</h5>
              <address className="text-muted">
                <i className="fas fa-map-marker-alt me-2"></i> Safdar road dab no 1 mansehra<br />
                <i className="fas fa-phone me-2"></i> <a href="tel:+923449864285" className="text-muted">+92 3449864285</a><br />
                <i className="fas fa-envelope me-2"></i> <a href="mailto:contact@uzaairmalik.dev" className="text-muted">contact@uzaairmalik.dev</a>
              </address>
            </div>
          </div>
          
          <div className="text-center text-muted mt-4">
            <small>
              &copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Doctors;