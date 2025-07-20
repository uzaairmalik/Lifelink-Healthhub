import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../services/contactService';
import '../css/contact.css';
import '../css/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      await submitContactForm(formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="contact-page">
      <header className="header">
        <div className="container">
          <div className="logo d-flex align-items-center">
            <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" className="heart-img me-2" loading="lazy" />
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
              <li><Link to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link className="active" to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-subtitle">We're here to help and answer any questions you may have</p>
            </div>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5>Our Location</h5>
                  <p className="text-muted">COMSATS University Islamabad, Abbottabad Campus</p>
                </div>

                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h5>Phone Number</h5>
                  <p className="text-muted">+92 123 4567890</p>
                </div>

                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5>Email Address</h5>
                  <p className="text-muted">info@lifelinkhealthhub.com</p>
                </div>

                <div className="text-center">
                  <h5 className="mt-4">Follow Us</h5>
                  <div className="social-links justify-content-center">
                    <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-instagram"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-5">
              <div className="contact-card">
                <h4 className="mb-4">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {status && (
                    <div className={`alert alert-${status.type === 'error' ? 'danger' : 'success'}`}>
                      {status.message}
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary">
                    {status?.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-md-3">
              <div className="contact-card">
                <h4 className="mb-4">Our Location</h4>
                <div className="map-container">
                  <iframe
                    title="LifeLinkHealthHub Location"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=COMSATS+University+Islamabad,Abbottabad+Campus`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
