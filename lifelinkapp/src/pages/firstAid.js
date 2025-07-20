import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const FirstAid = () => {
  return (
    <div className="first-aid-page">

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
              <li><Link className="active" to="/firstAid">FirstAid</Link></li>
              <li><Link to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link  to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>
     

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content animate__animated animate__fadeIn">
            <h1>First Aid Information</h1>
            <p>Learn essential first aid techniques to handle emergencies and save lives</p>
            <div className="mt-4">
              <Link to="#emergency-procedures" className="btn btn-primary me-3">Emergency Procedures</Link>
              <Link to="tel:+923449864285" className="btn btn-outline-light"><i className="fas fa-phone me-2"></i>Emergency Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* First Aid Content */}
      <section className="first-aid-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="first-aid-guide">
                <h2 id="emergency-procedures">Basic First Aid Procedures</h2>
                
                <div className="aid-item animate__animated animate__fadeInUp">
                  <h3><i className="fas fa-heartbeat"></i> CPR (Cardiopulmonary Resuscitation)</h3>
                  <ol>
                    <li>Check for responsiveness - tap the person's shoulder and shout "Are you okay?"</li>
                    <li>Call for emergency help - dial your local emergency number immediately</li>
                    <li>Open the airway - tilt the head back and lift the chin</li>
                    <li>Check for breathing - look, listen, and feel for no more than 10 seconds</li>
                    <li>Begin chest compressions - push hard and fast in the center of the chest at 100-120 compressions per minute</li>
                    <li>Give rescue breaths - after 30 compressions, give 2 breaths if trained</li>
                    <li>Continue cycles of 30 compressions and 2 breaths until help arrives or the person starts breathing</li>
                  </ol>
                  <div className="mt-4">
                    <Link to="https://www.youtube.com/watch?v=8VU2j8YlW5Y" target="_blank" className="btn btn-primary"><i className="fas fa-play me-2"></i>Watch CPR Video</Link>
                  </div>
                </div>
                
                <div className="aid-item animate__animated animate__fadeInUp animate__delay-1s">
                  <h3><i className="fas fa-tint"></i> Bleeding Control</h3>
                  <ol>
                    <li>Apply direct pressure to the wound with a clean cloth or bandage</li>
                    <li>Elevate the injured area above heart level if possible</li>
                    <li>Maintain pressure for at least 10-15 minutes</li>
                    <li>If bleeding soaks through, add more dressing without removing the original</li>
                    <li>For severe bleeding, consider using a tourniquet as last resort</li>
                    <li>Keep the victim warm and calm while waiting for medical help</li>
                  </ol>
                  <div className="mt-4">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bleedingModal">
                      <i className="fas fa-images me-2"></i>View Pressure Points
                    </button>
                  </div>
                </div>
                
                <div className="aid-item animate__animated animate__fadeInUp animate__delay-2s">
                  <h3><i className="fas fa-fire"></i> Burns Treatment</h3>
                  <ol>
                    <li>Cool the burn immediately with cool (not cold) running water for 10-15 minutes</li>
                    <li>Remove jewelry or tight clothing from the burned area before swelling begins</li>
                    <li>Cover loosely with sterile, non-adhesive bandage or clean cloth</li>
                    <li>Do not apply butter, oil, or home remedies to the burn</li>
                    <li>For chemical burns, flush with large amounts of water and remove contaminated clothing</li>
                    <li>Seek medical help for burns larger than 3 inches, or on face, hands, feet or genitals</li>
                  </ol>
                  <div className="mt-4">
                    <Link to="pdf/burns-treatment-guide.pdf" className="btn btn-primary" download>
                      <i className="fas fa-download me-2"></i>Download Burns Guide
                    </Link>
                  </div>
                </div>

                <div className="aid-item animate__animated animate__fadeInUp">
                  <h3><i className="fas fa-allergies"></i> Choking Response</h3>
                  <ol>
                    <li>Determine if the person can cough or speak (partial choking)</li>
                    <li>For conscious adults/children: Perform abdominal thrusts (Heimlich maneuver)</li>
                    <li>Stand behind the person and wrap your arms around their waist</li>
                    <li>Make a fist with one hand and place it above the navel</li>
                    <li>Grasp your fist with the other hand and perform quick upward thrusts</li>
                    <li>Continue until the object is expelled or the person becomes unconscious</li>
                    <li>For unconscious victims, begin CPR starting with chest compressions</li>
                  </ol>
                  <div className="mt-4">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chokingModal">
                      <i className="fas fa-child me-2"></i>Child Choking Technique
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="first-aid-sidebar">
                <div className="emergency-numbers animate__animated animate__fadeInRight">
                  <h3><i className="fas fa-phone-alt me-2"></i>Emergency Contacts</h3>
                  <ul>
                    <li><strong>Ambulance:</strong> <Link to="tel:1122">1122</Link></li>
                    <li><strong>Poison Control:</strong> <Link to="tel:03459467681">0345 9467681</Link></li>
                    <li><strong>Local Hospital:</strong> <Link to="tel:03449864285">0344 9864285</Link></li>
                    <li><strong>Fire Department:</strong> <Link to="tel:16">16</Link></li>
                    <li><strong>Police:</strong> <Link to="tel:15">15</Link></li>
                  </ul>
                  <div className="mt-4">
                    <Link to="/contact" className="btn btn-primary w-100">
                      <i className="fas fa-map-marker-alt me-2"></i>Find Nearest Hospital
                    </Link>
                  </div>
                </div>
                
                <div className="download-guide animate__animated animate__fadeInRight animate__delay-1s">
                  <h3><i className="fas fa-file-pdf me-2"></i>Download Guides</h3>
                  <p>Get our complete first aid manuals for your reference at home or work</p>
                  <div className="d-grid gap-2">
                    <Link to="pdf/first-aid-basic.pdf" className="btn btn-primary" download>
                      <i className="fas fa-download me-2"></i>Basic First Aid
                    </Link>
                    <Link to="pdf/child-first-aid.pdf" className="btn btn-primary" download>
                      <i className="fas fa-download me-2"></i>Child First Aid
                    </Link>
                    <Link to="pdf/workplace-first-aid.pdf" className="btn btn-primary" download>
                      <i className="fas fa-download me-2"></i>Workplace First Aid
                    </Link>
                  </div>
                </div>
                
                <div className="first-aid-kit animate__animated animate__fadeInRight animate__delay-2s">
                  <h3><i className="fas fa-first-aid me-2"></i>First Aid Kit Essentials</h3>
                  <ul>
                    <li>Various sized adhesive bandages</li>
                    <li>Sterile gauze pads and roller bandages</li>
                    <li>Adhesive tape and scissors</li>
                    <li>Antiseptic wipes and antibiotic ointment</li>
                    <li>Disposable gloves and CPR face shield</li>
                    <li>Thermometer and tweezers</li>
                    <li>Pain relievers and antihistamines</li>
                    <li>Emergency blanket and instant cold pack</li>
                  </ul>
                  <div className="mt-4">
                    <Link to="https://www.amazon.com/s?k=first+aid+kit" target="_blank" className="btn btn-primary w-100">
                      <i className="fas fa-shopping-cart me-2"></i>Buy First Aid Kit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bleeding Modal */}
      <div className="modal fade" id="bleedingModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Bleeding Control Pressure Points</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="/img/pressure-points.jpg" alt="Bleeding control pressure points" className="img-fluid rounded" />
              <p className="mt-3">Apply pressure to these points to help control severe bleeding when direct pressure isn't enough.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Choking Modal */}
      <div className="modal fade" id="chokingModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Child Choking Response</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img src="/img/child-choking.jpg" alt="Child choking response" className="img-fluid rounded mb-3" />
                </div>
                <div className="col-md-6">
                  <h4>For Children (1-8 years):</h4>
                  <ol>
                    <li>Kneel behind the child if they're small</li>
                    <li>Place your arms under the child's arms and around their upper abdomen</li>
                    <li>Make a fist with one hand and place thumb side against middle of abdomen</li>
                    <li>Grasp fist with other hand and give quick upward thrusts</li>
                    <li>Continue until object is expelled or child becomes unconscious</li>
                  </ol>
                  <h4 className="mt-4">For Infants:</h4>
                  <p>Use back blows and chest thrusts instead of abdominal thrusts</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <Link to="pdf/child-choking-guide.pdf" className="btn btn-primary" download>
                <i className="fas fa-download me-2"></i>Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" loading="lazy" />
              <div className="footer-about">
                <p>LifeLinkHealthHub is committed to providing quality healthcare information and emergency guidance to help save lives in critical situations.</p>
                <div className="social-links">
                  <Link to="https://www.facebook.com/LifeLinkHealthHub" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="https://twitter.com/LifeLinkHealth" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="https://instagram.com/LifeLinkHealthHub" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                  <Link to="https://youtube.com/c/LifeLinkHealthHub" target="_blank" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
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
                <h5>Resources</h5>
                <ul>
                  <li><Link to="https://www.verywellhealth.com/basic-first-aid-procedures-1298578" download>First Aid Guide</Link></li>
                  <li><Link to="pdf/emergency-contacts.pdf" download>Emergency Contacts</Link></li>
                  <li><Link to="/blog">Health Blog</Link></li>
                  <li><Link to="/faq">FAQs</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-contact">
                <h5>Contact Us</h5>
                <p><i className="fas fa-map-marker-alt"></i> Safdar Road Dab no 1, Mansehra, Pakistan</p>
                <p><i className="fas fa-phone"></i> <Link to="tel:+923449864285">+92 344 9864285</Link></p>
                <p><i className="fas fa-envelope"></i> <Link to="mailto:contact@lifelinkhealthhub.com">contact@lifelinkhealthhub.com</Link></p>
                <p><i className="fas fa-clock"></i> 24/7 Emergency Support Available</p>
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

export default FirstAid;