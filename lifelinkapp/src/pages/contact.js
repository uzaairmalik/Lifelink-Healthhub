import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, whatsappLink, SITE } from '../config';
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

  // No backend is deployed for this site, so the form hands the message to
  // WhatsApp when a clinic number is configured. When it isn't, we say so
  // honestly instead of faking a "sent" confirmation.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `New message from ${SITE.name} website\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`;
    const link = whatsappLink(text);
    if (link) {
      window.open(link, '_blank', 'noopener');
      setStatus({ type: 'success', message: 'Opening WhatsApp — press send there to deliver your message.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({
        type: 'error',
        message: 'Clinic WhatsApp is not configured yet — your details were validated locally but nothing was sent.'
      });
    }
  };

  return (
    <div className="contact-page">
      <header className="header">
        <div className="container">
          <div className="logo d-flex align-items-center">
            <img src="/img/logo1.webp" alt="LifeLinkHealthHub Logo" className="heart-img me-2" loading="lazy" width="604" height="706" />
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
                  <p className="text-muted">{SITE.city}</p>
                </div>

                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h5>WhatsApp</h5>
                  {WHATSAPP_NUMBER ? (
                    <a
                      className="btn btn-success btn-sm"
                      href={whatsappLink('Hello LifeLink HealthHub, I have a question.')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  ) : (
                    <p className="text-muted">Clinic WhatsApp coming soon</p>
                  )}
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
                    title="LifeLinkHealthHub Location — Abbottabad"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    loading="lazy"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=73.1900%2C34.1400%2C73.2500%2C34.1950&layer=mapnik&marker=34.1688%2C73.2215"
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
