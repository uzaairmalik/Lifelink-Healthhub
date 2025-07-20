import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css';
import '../css/free_med.css';
import '../css/style.css';

const FreeMedicines = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    eligibility: false,
    application: false,
    testimonials: false,
    faq: false
  });
  const [activeAccordionItem, setActiveAccordionItem] = useState('collapseOne'); // Default open accordion item
  const [searchTerm, setSearchTerm] = useState('');
  const [medicineData] = useState([
    { name: 'Amoxicillin', dosage: '500mg Capsule', quantity: 120, expiration: '12/2023' },
    { name: 'Lisinopril', dosage: '10mg Tablet', quantity: 85, expiration: '03/2024' },
    { name: 'Metformin', dosage: '850mg Tablet', quantity: 200, expiration: '08/2024' },
    { name: 'Atorvastatin', dosage: '20mg Tablet', quantity: 65, expiration: '05/2024' },
    { name: 'Albuterol Inhaler', dosage: '90mcg/actuation', quantity: 30, expiration: '10/2023' },
  ]);

  // External links (replace with your actual URLs)
  const externalLinks = {
    applyForm: 'https://forms.example.com/medicine-application',
    donate: 'https://donate.example.com/lifelinkhealthhub',
    contact: 'https://lifelinkhealthhub.com/contact',
    liveChat: 'https://support.example.com/lifelinkhealthhub',
    privacyPolicy: 'https://lifelinkhealthhub.com/privacy',
    termsOfService: 'https://lifelinkhealthhub.com/terms',
    sitemap: 'https://lifelinkhealthhub.com/sitemap',
    facebook: 'https://facebook.com/lifelinkhealthhub',
    twitter: 'https://twitter.com/lifelinkhealthhub',
    instagram: 'https://instagram.com/lifelinkhealthhub',
    linkedin: 'https://linkedin.com/company/lifelinkhealthhub',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.lifelinkhealthhub',
    appStore: 'https://apps.apple.com/us/app/lifelinkhealthhub/id123456789',
    medicineInfo: 'https://www.who.int/medicines/en/',
    partnerPrograms: 'https://www.healthpartners.org/programs',
    prescriptionHelp: 'https://www.rxassist.org/'
  };

  useEffect(() => {
    // Set the current date as the update date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleAccordion = (itemId) => {
    setActiveAccordionItem(activeAccordionItem === itemId ? null : itemId);
  };

  const filteredMedicines = medicineData.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.dosage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="free-medicines-page">
      {/* Header */}
      <header className="header sticky-top">
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
              <li><Link className="active" to="/free-Medicines">Medicines</Link></li>
              <li><Link to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
          <button className="mobile-menu-toggle" aria-label="Toggle menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Page Banner */}
      <section className="page-banner" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/medi.jpg') no-repeat center center/cover" }}>
        <div className="container">
          <div className="banner-content">
            <h1>Free Medicines Program</h1>
            <p>Access to essential medications for those in need</p>
            <div className="cta-buttons">
              <a href={externalLinks.applyForm} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a href="#medicines" className="btn btn-outline-light">View Available Medicines</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="quick-nav bg-light py-2">
        <div className="container">
          <ul className="d-flex justify-content-center flex-wrap">
            <li><a href="#about" className="px-3">About</a></li>
            <li><a href="#eligibility" className="px-3">Eligibility</a></li>
            <li><a href="#application" className="px-3">Application</a></li>
            <li><a href="#medicines" className="px-3">Medicines</a></li>
            <li><a href="#faq" className="px-3">FAQs</a></li>
          </ul>
        </div>
      </nav>

      {/* Medicines Content */}
      <section className="medicines-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="program-description mb-5" id="about">
                <h2 className="mb-4">About Our Free Medicines Program</h2>
                <p className="lead">Our Free Medicines Program is designed to help patients who cannot afford essential medications. We partner with pharmaceutical companies, government agencies, and non-profit organizations to provide life-saving medications to those in financial need.</p>
                
                <div className="stats-grid my-4">
                  <div className="stat-item">
                    <div className="stat-number">1,200+</div>
                    <div className="stat-label">Patients Helped</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Medicines Available</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24</div>
                    <div className="stat-label">Partner Organizations</div>
                  </div>
                </div>
                
                <div className="eligibility mt-5" id="eligibility">
                  <div className="section-header d-flex justify-content-between align-items-center">
                    <h3>Eligibility Requirements</h3>
                    <button 
                      className="btn btn-sm btn-outline-secondary" 
                      onClick={() => toggleSection('eligibility')}
                    >
                      {expandedSections.eligibility ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {expandedSections.eligibility && (
                    <div className="section-content">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Must be a resident of Pakistan</li>
                        <li className="list-group-item">Must meet income guidelines (proof of income required)//less than 50k a month</li>
                        <li className="list-group-item">Must have a valid prescription from a licensed physician</li>
                        <li className="list-group-item">Must not have prescription drug coverage through insurance</li>
                        <li className="list-group-item">Priority given to seniors (65+), children, and patients with chronic conditions</li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="application-process mt-5" id="application">
                  <div className="section-header d-flex justify-content-between align-items-center">
                    <h3>Application Process</h3>
                    <button 
                      className="btn btn-sm btn-outline-secondary" 
                      onClick={() => toggleSection('application')}
                    >
                      {expandedSections.application ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {expandedSections.application && (
                    <div className="section-content">
                      <div className="process-steps">
                        <div className="step">
                          <div className="step-number">1</div>
                          <div className="step-content">
                            <h5>Complete Application</h5>
                            <p>Fill out our online or paper application form with your personal and medical information.</p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">2</div>
                          <div className="step-content">
                            <h5>Submit Documents</h5>
                            <p>Provide proof of income (pay stubs, tax returns, or benefits statements) and a valid prescription.</p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">3</div>
                          <div className="step-content">
                            <h5>Review Meeting</h5>
                            <p>Meet with our program coordinator (in-person or virtually) to review your application.</p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">4</div>
                          <div className="step-content">
                            <h5>Receive Approval</h5>
                            <p>Get notification within 3-5 business days about your application status.</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <a href={externalLinks.applyForm} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Start Your Application</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="medicines-sidebar">
                <div className="available-medicines card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Commonly Available Medicines</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Antibiotics (Amoxicillin, Ciprofloxacin)</li>
                      <li className="list-group-item">Antihypertensives (Lisinopril, Amlodipine)</li>
                      <li className="list-group-item">Diabetes medications (Metformin, Insulin)</li>
                      <li className="list-group-item">Asthma inhalers (Albuterol)</li>
                      <li className="list-group-item">Antidepressants (Fluoxetine, Sertraline)</li>
                      <li className="list-group-item">Pain relievers (Ibuprofen, Acetaminophen)</li>
                      <li className="list-group-item">Cholesterol medications (Atorvastatin)</li>
                    </ul>
                    <div className="alert alert-info mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      <em>Availability may vary. <a href={externalLinks.medicineInfo} target="_blank" rel="noopener noreferrer">Learn more about these medicines</a></em>
                    </div>
                  </div>
                </div>
                
                <div className="donation-info card mb-4">
                  <div className="card-body text-center">
                    <h3 className="card-title">Support Our Program</h3>
                    <p className="card-text">Your donation helps us provide life-saving medications to those in need.</p>
                    <div className="donation-options mb-3">
                      <button className="btn btn-outline-primary me-2">$25</button>
                      <button className="btn btn-outline-primary me-2">$50</button>
                      <button className="btn btn-outline-primary">$100</button>
                    </div>
                    <a href={externalLinks.donate} className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">Donate Now</a>
                  </div>
                </div>

                <div className="contact-card card">
                  <div className="card-body">
                    <h3 className="card-title">Need Help?</h3>
                    <p className="card-text">Our team is here to assist you with the application process.</p>
                    <ul className="contact-info list-unstyled">
                      <li><i className="fas fa-phone me-2"></i> (800) 555-HELP</li>
                      <li><i className="fas fa-envelope me-2"></i> medicines@lifelinkhealthhub.com</li>
                      <li><i className="fas fa-clock me-2"></i> Mon-Fri: 9AM-5PM</li>
                    </ul>
                    <a href={externalLinks.liveChat} className="btn btn-outline-primary w-100 mt-2" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-comment-dots me-2"></i>Live Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="medicine-list mt-5" id="medicines">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>Current Medicine Availability</h2>
              <div className="search-box">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search medicines..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Quantity Available</th>
                    <th>Expiration Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMedicines.map((medicine, index) => (
                    <tr key={index}>
                      <td>{medicine.name}</td>
                      <td>{medicine.dosage}</td>
                      <td>
                        <div className="progress" style={{ height: '20px' }}>
                          <div 
                            className={`progress-bar ${medicine.quantity > 50 ? 'bg-success' : medicine.quantity > 20 ? 'bg-warning' : 'bg-danger'}`} 
                            role="progressbar" 
                            style={{ width: `${Math.min(100, medicine.quantity)}%` }}
                            aria-valuenow={medicine.quantity}
                            aria-valuemin="0"
                            aria-valuemax="200"
                          >
                            {medicine.quantity}
                          </div>
                        </div>
                      </td>
                      <td>{medicine.expiration}</td>
                      <td>
                        {medicine.quantity > 50 ? (
                          <span className="badge bg-success">In Stock</span>
                        ) : medicine.quantity > 20 ? (
                          <span className="badge bg-warning text-dark">Limited</span>
                        ) : (
                          <span className="badge bg-danger">Low Stock</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted text-end"><small>Last updated: <span id="update-date">{currentDate}</span></small></p>
            <div className="text-center mt-3">
              <a href={externalLinks.partnerPrograms} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                View Our Partner Programs
              </a>
            </div>
          </div>

          {/* Patient Testimonials */}
          <div className="testimonials mt-5" id="testimonials">
            <div className="section-header d-flex justify-content-between align-items-center mb-4">
              <h2>Patient Testimonials</h2>
              <button 
                className="btn btn-sm btn-outline-secondary" 
                onClick={() => toggleSection('testimonials')}
              >
                {expandedSections.testimonials ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {expandedSections.testimonials && (
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="testimonial-item card h-100">
                    <div className="card-body">
                      <div className="rating mb-2">
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                      </div>
                      <p className="card-text">"Thanks to the Free Medicines Program, I was able to get my diabetes medication without worrying about the cost. It has changed my life!"</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <strong>- Sarah J.</strong>
                      <div className="text-muted small">Diabetes Patient</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="testimonial-item card h-100">
                    <div className="card-body">
                      <div className="rating mb-2">
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                      </div>
                      <p className="card-text">"I can't express how grateful I am for this program. The staff was so helpful, and I received my medications quickly!"</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <strong>- John D.</strong>
                      <div className="text-muted small">Hypertension Patient</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="testimonial-item card h-100">
                    <div className="card-body">
                      <div className="rating mb-2">
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star-half-alt text-warning"></i>
                      </div>
                      <p className="card-text">"This program is a lifesaver for people like me who struggle to afford necessary medications. Thank you for your support!"</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <strong>- Emily R.</strong>
                      <div className="text-muted small">Asthma Patient</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Frequently Asked Questions */}
          <div className="faq mt-5" id="faq">
            <div className="section-header d-flex justify-content-between align-items-center mb-4">
              <h2>Frequently Asked Questions</h2>
              <button 
                className="btn btn-sm btn-outline-secondary" 
                onClick={() => toggleSection('faq')}
              >
                {expandedSections.faq ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {expandedSections.faq && (
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button 
                      className={`accordion-button ${activeAccordionItem === 'collapseOne' ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion('collapseOne')}
                      aria-expanded={activeAccordionItem === 'collapseOne'}
                    >
                      Who is eligible for the Free Medicines Program?
                    </button>
                  </h3>
                  <div 
                    id="collapseOne" 
                    className={`accordion-collapse collapse ${activeAccordionItem === 'collapseOne' ? 'show' : ''}`} 
                    aria-labelledby="headingOne"
                  >
                    <div className="accordion-body">
                      Eligibility is based on residency in our service area, income guidelines, and the need for a valid prescription. Priority is given to seniors (65+), children, and patients with chronic conditions. Please refer to the detailed eligibility requirements above.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button 
                      className={`accordion-button ${activeAccordionItem === 'collapseTwo' ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion('collapseTwo')}
                      aria-expanded={activeAccordionItem === 'collapseTwo'}
                    >
                      How can I apply for the program?
                    </button>
                  </h3>
                  <div 
                    id="collapseTwo" 
                    className={`accordion-collapse collapse ${activeAccordionItem === 'collapseTwo' ? 'show' : ''}`} 
                    aria-labelledby="headingTwo"
                  >
                    <div className="accordion-body">
                      You can apply by completing our online application form or picking up a paper form at our office. Make sure to provide all required documentation including proof of income and a valid prescription from your healthcare provider.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button 
                      className={`accordion-button ${activeAccordionItem === 'collapseThree' ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion('collapseThree')}
                      aria-expanded={activeAccordionItem === 'collapseThree'}
                    >
                      What types of medicines are available?
                    </button>
                  </h3>
                  <div 
                    id="collapseThree" 
                    className={`accordion-collapse collapse ${activeAccordionItem === 'collapseThree' ? 'show' : ''}`} 
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body">
                      We offer a variety of essential medications including antibiotics, antihypertensives, diabetes medications, asthma inhalers, antidepressants, pain relievers, and cholesterol medications. The availability changes frequently based on donations and partnerships. <a href={externalLinks.medicineInfo} target="_blank" rel="noopener noreferrer">Learn more about essential medicines</a>.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFour">
                    <button 
                      className={`accordion-button ${activeAccordionItem === 'collapseFour' ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion('collapseFour')}
                      aria-expanded={activeAccordionItem === 'collapseFour'}
                    >
                      How often is the medicine availability updated?
                    </button>
                  </h3>
                  <div 
                    id="collapseFour" 
                    className={`accordion-collapse collapse ${activeAccordionItem === 'collapseFour' ? 'show' : ''}`} 
                    aria-labelledby="headingFour"
                  >
                    <div className="accordion-body">
                      The availability of medicines is updated in real-time as we receive donations and distribute medications. The table on this page reflects our current stock levels. For the most accurate information, you can call our medicine hotline at (800) 555-MEDS.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFive">
                    <button 
                      className={`accordion-button ${activeAccordionItem === 'collapseFive' ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion('collapseFive')}
                      aria-expanded={activeAccordionItem === 'collapseFive'}
                    >
                      Can I donate unused medications?
                    </button>
                  </h3>
                  <div 
                    id="collapseFive" 
                    className={`accordion-collapse collapse ${activeAccordionItem === 'collapseFive' ? 'show' : ''}`} 
                    aria-labelledby="headingFive"
                  >
                    <div className="accordion-body">
                      We accept donations of unexpired, unopened medications in their original packaging. Certain controlled substances cannot be accepted due to legal restrictions. Please contact our donation coordinator at <a href={`mailto:donations@lifelinkhealthhub.com`}>donations@lifelinkhealthhub.com</a> for more information.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Need Help Getting Your Medications?</h2>
          <p className="lead mb-4">Our team is ready to assist you with the application process and answer any questions you may have.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href={externalLinks.contact} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <a href={externalLinks.applyForm} className="btn btn-outline-light btn-lg" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-widget">
                <div className="d-flex align-items-center mb-3">
                  <img src="img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo me-2" />
                  <h4>LifeLinkHealthHub</h4>
                </div>
                <p className="mb-4">Committed to providing quality healthcare services and medications to our community regardless of financial status.</p>
                <div className="social-links">
                  <a href={externalLinks.facebook} className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href={externalLinks.twitter} className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href={externalLinks.instagram} className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href={externalLinks.linkedin} className="text-white" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-widget">
                <h5 className="mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link to="/" className="text-white">Home</Link></li>
                  <li className="mb-2"><Link to="/firstAid" className="text-white">First Aid</Link></li>
                  <li className="mb-2"><Link to="/bloodGroups" className="text-white">Blood Groups</Link></li>
                  <li className="mb-2"><Link to="/free-Medicines" className="text-white">Medicines</Link></li>
                  <li className="mb-2"><Link to="/Doctors" className="text-white">Doctors</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h5 className="mb-3">Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> 200, D-block, Green lane USA</li>
                  <li className="mb-2"><i className="fas fa-phone me-2"></i> +10 367 467 8934</li>
                  <li className="mb-2"><i className="fas fa-envelope me-2"></i> contact@lifelinkhealthhub.com</li>
                  <li className="mb-2"><i className="fas fa-clock me-2"></i> Mon-Fri: 9AM-6PM</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="footer-widget">
                <h5 className="mb-3">Newsletter</h5>
                <p>Subscribe to our newsletter for updates on medicine availability and health tips.</p>
                <form className="mb-3">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your email" />
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                  </div>
                </form>
                <div className="app-badges">
                  <a href={externalLinks.googlePlay} target="_blank" rel="noopener noreferrer" className="me-2">
                    <img src="img/google-play-badge.png" alt="Google Play" height="40" />
                  </a>
                  <a href={externalLinks.appStore} target="_blank" rel="noopener noreferrer">
                    <img src="img/app-store-badge.png" alt="App Store" height="40" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href={externalLinks.privacyPolicy} className="text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li className="list-inline-item mx-2">•</li>
                <li className="list-inline-item"><a href={externalLinks.termsOfService} className="text-white" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                <li className="list-inline-item mx-2">•</li>
                <li className="list-inline-item"><a href={externalLinks.sitemap} className="text-white" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreeMedicines;