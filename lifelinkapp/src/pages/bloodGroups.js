import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BG.css';
import '../css/style.css';

const BloodGroups = () => {
  // Static blood compatibility data
  const bloodCompatibility = {
    'O-': {
      canDonateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-']
    },
    'O+': {
      canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
      canReceiveFrom: ['O-', 'O+']
    },
    'A-': {
      canDonateTo: ['A-', 'A+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-', 'A-']
    },
    'A+': {
      canDonateTo: ['A+', 'AB+'],
      canReceiveFrom: ['O-', 'O+', 'A-', 'A+']
    },
    'B-': {
      canDonateTo: ['B-', 'B+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-', 'B-']
    },
    'B+': {
      canDonateTo: ['B+', 'AB+'],
      canReceiveFrom: ['O-', 'O+', 'B-', 'B+']
    },
    'AB-': {
      canDonateTo: ['AB-', 'AB+'],
      canReceiveFrom: ['O-', 'A-', 'B-', 'AB-']
    },
    'AB+': {
      canDonateTo: ['AB+'],
      canReceiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
    }
  };

  // Static donation process data
  const donationProcess = {
    steps: [
      {
        title: "Registration",
        description: "Complete the donor registration form with your personal information"
      },
      {
        title: "Health Check",
        description: "Have a mini-physical to check temperature, blood pressure, pulse and hemoglobin levels"
      },
      {
        title: "Donation",
        description: "Actual blood donation takes about 8-10 minutes"
      },
      {
        title: "Refreshment",
        description: "Enjoy snacks and rest for 10-15 minutes before leaving"
      }
    ],
    duration: "1 hour",
    frequency: "Every 56 days for whole blood donation"
  };

  return (
    <div className="blood-groups-page">
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
              <li><Link  to="/">Home</Link></li>
              <li><Link to="/firstAid">FirstAid</Link></li>
              <li><Link className="active"to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link to="/Doctors">Doctors</Link></li>
              <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="blood-groups-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blood-intro mb-5 text-center">
                <h2>Blood Type Compatibility</h2>
                <p className="lead">
                  Understanding blood type compatibility is crucial for safe blood transfusions. 
                  Our comprehensive guide helps you learn which blood types can donate to and receive from others.
                </p>
              </div>
              
              <div className="compatibility-chart mb-5">
                <h3 className="text-center mb-4">Blood Type Compatibility Chart</h3>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Blood Type</th>
                        <th>Can Donate To</th>
                        <th>Can Receive From</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(bloodCompatibility).map(([bloodType, info]) => (
                        <tr key={bloodType}>
                          <td>
                            <strong>{bloodType}</strong>
                            {bloodType === 'O-' && <span className="badge bg-success ms-2">Universal Donor</span>}
                            {bloodType === 'AB+' && <span className="badge bg-info ms-2">Universal Recipient</span>}
                          </td>
                          <td>{info.canDonateTo.join(', ')}</td>
                          <td>{info.canReceiveFrom.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="blood-donation-info mb-5">
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="donation-process card h-100">
                      <div className="card-body">
                        <h3 className="card-title">Blood Donation Process</h3>
                        <ol className="list-group list-group-numbered">
                          {donationProcess.steps.map((step, index) => (
                            <li key={index} className="list-group-item">
                              <strong>{step.title}:</strong> {step.description}
                            </li>
                          ))}
                        </ol>
                        <div className="alert alert-info mt-3">
                          <strong>Duration:</strong> Approximately {donationProcess.duration}.<br />
                          <strong>Frequency:</strong> {donationProcess.frequency}.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="donation-benefits card h-100">
                      <div className="card-body">
                        <h3 className="card-title">Benefits of Blood Donation</h3>
                        <ul className="list-group">
                          <li className="list-group-item">Helps save lives: One donation can potentially save up to three lives</li>
                          <li className="list-group-item">Health screening: Donors get a free health checkup</li>
                          <li className="list-group-item">Reduces excess iron in the body, which may lower heart disease risk</li>
                          <li className="list-group-item">Stimulates production of new blood cells</li>
                          <li className="list-group-item">Burns approximately 650 calories per donation</li>
                          <li className="list-group-item">Fosters community and altruism</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="important-facts card mt-4">
                <div className="card-body">
                  <h3 className="card-title">Important Facts About Blood Donation</h3>
                  <div className="alert alert-warning">
                    <ul className="mb-0">
                      <li>Minimum age: 17 years (16 with parental consent in some regions)</li>
                      <li>Minimum weight: 110 pounds (50 kg)</li>
                      <li>Pregnant women should consult a doctor before donating</li>
                      <li>Disclose all travel history and medications during screening</li>
                      <li>Hydrate well and eat a healthy meal before donating</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Donation CTA */}
      <section className="blood-donation-cta bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-3">Ready to Donate Blood?</h2>
          <p className="lead mb-4">
            Your donation could save a life today. Find a blood drive near you or schedule an appointment.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/find-donor" className="btn btn-light btn-lg">
              Find a Blood Drive
            </Link>
            <Link to="/schedule-appointment" className="btn btn-outline-light btn-lg">
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>

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
                {['facebook-f', 'twitter', 'instagram'].map((icon) => (
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
              <h5>Departments</h5>
              <ul className="list-unstyled">
                {['Eye Care', 'Skin Care', 'Pathology'].map((dept) => (
                  <li key={dept} className="mb-2">
                    <Link to="#" className="text-muted">{dept}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <address className="text-muted">
                Safdar road dab no 1 mansehra<br />
                <a href="tel:+923449864285" className="text-muted">+92 3449864285</a><br />
                <a href="mailto:contact@uzaairmalik.dev" className="text-muted">
                  contact@uzaairmalik.dev
                </a>
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

export default BloodGroups;