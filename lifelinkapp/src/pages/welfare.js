import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import '../css/welfare.css'
const Welfare = () => {
  return (
    <div className="welfare-page">
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/firstAid">FirstAid</Link></li>
              <li><Link to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link >Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link className="active" to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Welfare Banner */}
      <section className="welfare-banner py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center animate__animated animate__fadeIn">
              <h1 className="display-4 fw-bold mb-3">Community Welfare Services</h1>
              <p className="lead mb-4">Find free food, shelter and essential resources for those in need</p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="#food-resources" className="btn btn-primary btn-lg px-4">
                  <i className="fas fa-utensils me-2"></i>Find Food
                </Link>
                <Link to="#shelter-services" >
                  <i className="fas fa-home me-2"></i>Find Shelter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welfare Services */}
      <section className="welfare-services py-5">
        <div className="container">
          {/* Food Resources */}
          <div className="row mb-5" id="food-resources">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title fw-bold animate__animated animate__fadeIn">Food Assistance</h2>
              <p className="text-muted">Find free meals and groceries in your area</p>
            </div>
            
            <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
              <div className="service-card h-100 p-4 rounded-3 shadow-sm">
                <div className="service-icon text-center mb-3">
                  <i className="fas fa-utensils fa-3x text-primary"></i>
                </div>
                <h3 className="text-center mb-4">Community Kitchens</h3>
                <div className="service-list">
                  <div className="service-item mb-4 p-3 bg-light rounded">
                    <h4>Hope Community Kitchen</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> 123 Main Street, Abbottabad</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Open Daily: 12PM - 3PM</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Provides hot meals for individuals and families</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923441234567" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                      <Link 
                        to="https://maps.google.com?q=123+Main+Street+Abbottabad" 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                      </Link>
                    </div>
                  </div>
                  
                  <div className="service-item p-3 bg-light rounded">
                    <h4>Food Bank Distribution</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> Central Abbottabad Market</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Wednesdays: 9AM - 12PM</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Dry goods and staple items for families</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923441234568" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                      <Link 
                        to="https://maps.google.com?q=Central+Abbottabad+Market" 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
              <div className="service-card h-100 p-4 rounded-3 shadow-sm">
                <div className="service-icon text-center mb-3">
                  <i className="fas fa-apple-alt fa-3x text-primary"></i>
                </div>
                <h3 className="text-center mb-4">Food Pantries</h3>
                <div className="service-list">
                  <div className="service-item mb-4 p-3 bg-light rounded">
                    <h4>Blessings Food Pantry</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> Near City Hospital</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Mon-Fri: 10AM - 4PM</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Non-perishable food items, no ID required</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923441234569" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                      <Link 
                        to="https://maps.google.com?q=Near+City+Hospital+Abbottabad" 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                      </Link>
                    </div>
                  </div>
                  
                  <div className="service-item p-3 bg-light rounded">
                    <h4>Mobile Food Truck</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> Various locations weekly</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Schedule varies - call for details</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Fresh produce and ready-to-eat meals</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923441234570" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call for Schedule
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shelter Services */}
          <div className="row mb-5" id="shelter-services">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title fw-bold animate__animated animate__fadeIn">Shelter Services</h2>
              <p className="text-muted">Safe places to stay for those in need</p>
            </div>
            
            <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
              <div className="service-card h-100 p-4 rounded-3 shadow-sm">
                <div className="service-icon text-center mb-3">
                  <i className="fas fa-home fa-3x text-primary"></i>
                </div>
                <h3 className="text-center mb-4">Emergency Shelter</h3>
                <div className="service-list">
                  <div className="service-item mb-4 p-3 bg-light rounded">
                    <h4>Safe Haven Shelter</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> 456 Shelter Road, Abbottabad</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Open 24/7</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Temporary housing for individuals and families</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923445678901" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                      <Link 
                        to="https://maps.google.com?q=456+Shelter+Road+Abbottabad" 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                      </Link>
                    </div>
                  </div>
                  
                  <div className="service-item p-3 bg-light rounded">
                    <h4>Winter Emergency Shelter</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> Community Center, Downtown</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Nov-Mar: 7PM - 7AM</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> Overnight shelter during cold months</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923445678902" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call for Availability
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
              <div className="service-card h-100 p-4 rounded-3 shadow-sm">
                <div className="service-icon text-center mb-3">
                  <i className="fas fa-female fa-3x text-primary"></i>
                </div>
                <h3 className="text-center mb-4">Specialized Shelter</h3>
                <div className="service-list">
                  <div className="service-item mb-4 p-3 bg-light rounded">
                    <h4>Women's Safe House</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> Confidential Location</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> 24/7 Security</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> For women and children escaping domestic violence</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923449864285" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Confidential Hotline
                      </Link>
                    </div>
                  </div>
                  
                  <div className="service-item p-3 bg-light rounded">
                    <h4>Youth Shelter</h4>
                    <p className="mb-1"><i className="fas fa-map-marker-alt text-primary me-2"></i> 789 Hope Avenue</p>
                    <p className="mb-1"><i className="fas fa-clock text-primary me-2"></i> Open 24/7</p>
                    <p className="mb-3"><i className="fas fa-info-circle text-primary me-2"></i> For homeless youth ages 12-24</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to="tel:+923445678903" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>Call Now
                      </Link>
                      <Link 
                        to="https://maps.google.com?q=789+Hope+Avenue+Abbottabad" 
                        target="_blank" 
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-map-marked-alt me-2"></i>Get Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contact Banner */}
          <div className="emergency-banner py-5 mb-5 rounded-3 animate__animated animate__fadeIn">
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3 className="fw-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="lead mb-4">Our 24/7 helpline can connect you with emergency services, food, and shelter right now.</p>
                  <Link 
                    to="tel:+923449864285" 
                    className="btn btn-light btn-lg px-5 py-3 fw-bold"
                  >
                    <i className="fas fa-phone me-2"></i>Call Emergency Helpline
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title fw-bold animate__animated animate__fadeIn">Additional Support Services</h2>
              <p className="text-muted">Comprehensive assistance for all needs</p>
            </div>
            
            <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
              <div className="resource-card h-100 p-4 text-center rounded-3 shadow-sm">
                <i className="fas fa-tshirt fa-3x text-primary mb-3"></i>
                <h4 className="mb-3">Clothing Donations</h4>
                <p className="mb-4">Free clothing for all ages and seasons</p>
                <div className="mt-auto">
                  <Link to="#" className="btn btn-outline-primary">Find Locations</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="resource-card h-100 p-4 text-center rounded-3 shadow-sm">
                <i className="fas fa-book fa-3x text-primary mb-3"></i>
                <h4 className="mb-3">Education Support</h4>
                <p className="mb-4">Free tutoring, school supplies and scholarships</p>
                <div className="mt-auto">
                  <Link to="#" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="resource-card h-100 p-4 text-center rounded-3 shadow-sm">
                <i className="fas fa-hand-holding-heart fa-3x text-primary mb-3"></i>
                <h4 className="mb-3">Counseling Services</h4>
                <p className="mb-4">Professional mental health and crisis support</p>
                <div className="mt-auto">
                  <Link to="#" className="btn btn-outline-primary">Get Help</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Map */}
          <div className="row mt-5 mb-5 animate__animated animate__fadeIn">
            <div className="col-12">
              <div className="service-card p-4 rounded-3 shadow-sm">
                <div className="d-flex align-items-center mb-4">
                  <div className="service-icon me-3">
                    <i className="fas fa-map-marked-alt fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h3 className="mb-1">Resource Map</h3>
                    <p className="mb-0">Use our interactive map to find all welfare services near your current location</p>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="#" className="btn btn-primary btn-lg mb-4">
                    <i className="fas fa-map me-2"></i>View Resource Map
                  </Link>
                </div>
                <div 
                  className="mt-3" 
                  id="resourceMap" 
                  style={{ 
                    height: '400px', 
                    background: '#f5f5f5', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #dee2e6'
                  }}
                >
                  <div className="text-center p-4">
                    <i className="fas fa-map-marked-alt fa-4x text-muted mb-3"></i>
                    <h4 className="text-muted">Interactive Resource Map</h4>
                    <p className="text-muted">Map would appear here with all service locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src="/img/logo1.png" 
                  alt="LifeLinkHealthHub Logo" 
                  className="footer-logo me-2" 
                  loading="lazy" 
                  width="50"
                  height="50"
                />
                <h5 className="fw-bold mb-0">LifeLinkHealthHub</h5>
              </div>
              <div className="footer-about">
                <p className="mb-4">LifeLinkHealthHub provides comprehensive welfare services and resources to support our community members in need.</p>
                <div className="social-links d-flex gap-3">
                  <Link 
                    to="https://www.facebook.com/LifeLinkHealthHub" 
                    target="_blank" 
                    aria-label="Facebook"
                    className="text-white"
                  >
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </Link>
                  <Link 
                    to="https://twitter.com/LifeLinkHealth" 
                    target="_blank" 
                    aria-label="Twitter"
                    className="text-white"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </Link>
                  <Link 
                    to="https://instagram.com/LifeLinkHealthHub" 
                    target="_blank" 
                    aria-label="Instagram"
                    className="text-white"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </Link>
                  <Link 
                    to="https://youtube.com/c/LifeLinkHealthHub" 
                    target="_blank" 
                    aria-label="YouTube"
                    className="text-white"
                  >
                    <i className="fab fa-youtube fa-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5 className="fw-bold mb-4">Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="mb-2"><Link to="/firstAid" className="text-white-50">First Aid</Link></li>
                  <li className="mb-2"><Link to="/bloodGroups" className="text-white-50">Blood Groups</Link></li>
                  <li className="mb-2"><Link to="/free-Medicines" className="text-white-50">Medicines</Link></li>
                  <li className="mb-2"><Link to="/Doctors" className="text-white-50">Doctors</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5 className="fw-bold mb-4">Welfare Services</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/welfare#food-resources" className="text-white-50">Food Assistance</Link></li>
                  <li className="mb-2"><Link to="/welfare#shelter-services" className="text-white-50">Shelter Services</Link></li>
                  <li className="mb-2"><Link to="#" className="text-white-50">Clothing Donations</Link></li>
                  <li className="mb-2"><Link to="#" className="text-white-50">Counseling</Link></li>
                  <li className="mb-2"><Link to="#" className="text-white-50">Job Training</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-contact">
                <h5 className="fw-bold mb-4">Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt me-2 text-primary"></i> 
                    Safdar Road Dab no 1, Mansehra, Pakistan
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-phone me-2 text-primary"></i> 
                    <Link to="tel:+923449864285" className="text-white-50">+92 344 9864285</Link>
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope me-2 text-primary"></i> 
                    <Link to="mailto:contact@lifelinkhealthhub.com" className="text-white-50">contact@lifelinkhealthhub.com</Link>
                  </li>
                  <li>
                    <i className="fas fa-clock me-2 text-primary"></i> 
                    24/7 Emergency Support Available
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="copyright text-center pt-4 mt-4 border-top border-secondary">
            &copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Link 
        to="#" 
        className="back-to-top d-flex align-items-center justify-content-center"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Welfare;