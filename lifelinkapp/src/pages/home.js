import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      background: "/img/dr.Usman.jpg",
      title: "Every Life Matters",
      description: "Providing quality healthcare services for you and your family with compassion and excellence.",
      buttons: [
        { text: "Our Services", link: "#services", className: "btn btn-primary me-3" },
        { text: "Contact Us", link: "/contact", className: "btn btn-outline-white" }
      ]
    },
    {
      background: "/img/Dr.Ali.jpg",
      title: "Advanced Medical Care",
      description: "State-of-the-art facilities with compassionate professionals dedicated to your health.",
      buttons: [
        { text: "Meet Our Doctors", link: "/Doctors", className: "btn btn-primary me-3" },
        { text: "Call Now", link: "tel:+923449864285", className: "btn btn-outline-white", icon: "fas fa-phone me-2" }
      ]
    },
    {
      background: "/img/doctors.jpg",
      title: "24/7 Emergency Services",
      description: "Always here when you need us most with immediate medical attention.",
      buttons: [
        { text: "Emergency Call", link: "tel:+923449864285", className: "btn btn-primary me-3", icon: "fas fa-phone me-2" },
        { text: "First Aid Guide", link: "/firstAid", className: "btn btn-outline-white" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="home-page">
      {/* Header */}
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
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/firstAid">FirstAid</Link></li>
              <li><Link to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.background})` }}>
              <div className="container">
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div>
                    {slide.buttons.map((button, idx) => (
                      <Link key={idx} to={button.link} className={button.className}>
                        {button.icon && <i className={button.icon}></i>}
                        {button.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button onClick={goToPrevSlide} aria-label="Previous Slide"><i className="fas fa-chevron-left"></i></button>
          <div className="slider-dots">
            {slides.map((_, i) => (
              <span key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(i)}></span>
            ))}
          </div>
          <button onClick={goToNextSlide} aria-label="Next Slide"><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We provide comprehensive healthcare services to meet all your medical needs</p>
          
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-hospital"></i>
                <h3>Hospital Services</h3>
                <p>World-class hospital facilities with modern equipment and comfortable patient care.</p>
                <Link to="/ApplyBed" className="btn btn-primary">Apply For a Bed</Link>

              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-ambulance"></i>
                <h3>Emergency Care</h3>
                <p>24/7 emergency services with rapid response teams and critical care specialists.</p>
                <Link to="tel:+923449864285" className="btn btn-primary">+92 344 9864285</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-stethoscope"></i>
                <h3>SpecialistConsultations</h3>
                <p>Expert consultations across all medical specialties with personalized treatment plans.</p>
                <Link to="Doctors" className="btn btn-primary">Make Appointment</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-heartbeat"></i>
                <h3>Cardiac Care</h3>
                <p>Comprehensive heart care services from prevention to advanced surgical procedures.</p>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-procedures"></i>
                <h3>Surgical Services</h3>
                <p>Advanced surgical procedures performed by experienced specialists in modern ORs.</p>
                <Link to="#" className="btn btn-primary">View Specialties</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <i className="fas fa-flask"></i>
                <h3>Diagnostic Services</h3>
                <p>Accurate diagnostic testing including imaging, pathology, and laboratory services.</p>
                <Link to="#" className="btn btn-primary">Book a Test</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="img/about/1.png" alt="About LifeLinkHealthHub" className="img-fluid about-img" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h2>Welcome to LifeLinkHealthHub</h2>
              <h3>Best Care For Your Good Health</h3>
              <p>We are committed to providing quality healthcare services to our community with compassion and excellence. Our team of dedicated professionals works tirelessly to ensure you receive the best possible care.</p>
              
              <ul>
                <li>24/7 emergency services with rapid response</li>
                <li>Board-certified medical professionals</li>
                <li>Affordable treatment options for all</li>
                <li>State-of-the-art medical equipment</li>
                <li>Patient-centered care approach</li>
              </ul>
              
              <Link to="#" className="btn btn-primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments">
  <div className="container">
    <h2 className="section-title">Our Departments</h2>
    <p className="section-subtitle">Specialized care for all your health needs across various medical disciplines</p>

    <div className="row">
      {/* Eye Care */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/eye.jpg" alt="Eye Care" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Eye Care</h3>
            <p>Comprehensive eye care services including cataract surgery, LASIK, glaucoma treatment, etc.</p>
            <a href="https://www.aao.org/eye-health" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      {/* Physical Therapy */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/theorapy.jpg" alt="Physical Therapy" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Physical Therapy</h3>
            <p>Rehabilitation services to restore movement and function after injury or surgery with personalized treatment plans.</p>
            <a href="https://www.apta.org/patient-care" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      {/* Dental Care */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/dentist.jpg" alt="Dental Care" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Dental Care</h3>
            <p>Complete dental services including cosmetic dentistry, orthodontics, oral surgery, and preventive care.</p>
            <a href="https://www.mouthhealthy.org/" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      {/* Cardiology */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/cardiology.jpg" alt="Cardiology" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Cardiology</h3>
            <p>Advanced cardiac care including angioplasty, bypass surgery, arrhythmia treatment, and preventive cardiology.</p>
            <a href="https://www.heart.org/en/health-topics" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      {/* Neurology */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/neurology.jpg" alt="Neurology" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Neurology</h3>
            <p>Specialized care for neurological disorders including stroke, epilepsy, Parkinson's, and multiple sclerosis.</p>
            <a href="https://www.brainandlife.org/" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      {/* Pediatrics */}
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="department-card">
          <img src="img/pediatric.jpg" alt="Pediatrics" className="img-fluid department-img" loading="lazy" />
          <div className="department-content">
            <h3>Pediatrics</h3>
            <p>Compassionate care for infants, children, and adolescents with specialized pediatric services.</p>
            <a href="https://www.healthychildren.org/" target="_blank" rel="noopener noreferrer" className="department-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Emergency Contact Section */}
      <section className="emergency-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="emergency-card">
                <h3>For Any Emergency Contact</h3>
                <p>Our emergency team is available 24/7 to provide immediate medical attention when you need it most.</p>
                <Link to="tel:+923449864285" className="btn"><i className="fas fa-phone me-2"></i>+92 344 9864285</Link>
              </div>
            </div>
            
            <div className="col-lg-6 mb-4">
              <div className="emergency-card">
                <h3>Make an Online Appointment</h3>
                <p>Schedule your visit with our specialists conveniently through our online booking system.</p>
                <Link to="Doctors" className="btn"><i className="fas fa-calendar-check me-2"></i>Book Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <img src="img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" loading="lazy" />
              <div className="footer-about">
                <p>LifeLinkHealthHub is committed to providing quality healthcare services to our community with compassion and excellence. Our team of dedicated professionals works tirelessly to ensure you receive the best possible care.</p>
                <div className="social-links">
                  <Link to="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                  <Link to="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                  <Link to="#" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/firstAid">First Aid</Link></li>
                  <li><Link to="/bloodGroups">Blood Groups</Link></li>
                  <li><Link to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5>Services</h5>
                <ul>
                  <li><Link to="#">Emergency Care</Link></li>
                  <li><Link to="#">Cardiac Care</Link></li>
                  <li><Link to="#">Surgical Services</Link></li>
                  <li><Link to="#">Diagnostics</Link></li>
                  <li><Link to="#">Physical Therapy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-contact">
                <h5>Contact Us</h5>
                <p><i className="fas fa-map-marker-alt"></i> 123 Medical Center Drive, Health City, PK 12345</p>
                <p><i className="fas fa-phone"></i> +92 344 9864285</p>
                <p><i className="fas fa-envelope"></i> info@lifelinkhealthhub.com</p>
                <p><i className="fas fa-clock"></i> Open 24/7 for emergency services</p>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Link to="#" className="back-to-top" aria-label="Back to top"><i className="fas fa-arrow-up"></i></Link>
    </div>
  );
};

export default Home;