import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/SympChe.css';
import '../css/style.css';

const SymptomsChecker = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysis, setAnalysis] = useState({
    possibleConditions: [],
    recommendedActions: [],
    whenToSeekHelp: [],
    selfCare: [],
    severity: 'moderate'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Safely access form data using ref
    const form = formRef.current;
    const formData = {
      age: form.age.value,
      gender: form.gender.value,
      symptoms: form.symptoms.value.toLowerCase(),
      duration: form.duration.value,
      additionalInfo: form['additional-info'].value
    };

    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      
      let conditions = [];
      let actions = [];
      let whenToSeek = [];
      let care = [];
      let severity = 'moderate';

      if (formData.symptoms.includes('headache')) {
        conditions = ['Tension headache', 'Migraine', 'Sinusitis'];
        actions = [
          'Rest in a quiet, dark room',
          'Stay hydrated',
          'Consider over-the-counter pain relievers like acetaminophen or ibuprofen'
        ];
        whenToSeek = [
          'If headache is severe or sudden',
          'If accompanied by fever, stiff neck, confusion, or vision changes',
          'If headache persists for more than a few days'
        ];
        care = [
          'Apply a cool compress to your forehead',
          'Practice relaxation techniques',
          'Maintain regular sleep patterns'
        ];
        severity = formData.symptoms.includes('severe') ? 'high' : 'moderate';
      } else if (formData.symptoms.includes('fever')) {
        conditions = ['Viral infection', 'Bacterial infection', 'Flu'];
        actions = [
          'Stay hydrated',
          'Get plenty of rest',
          'Take fever-reducing medication if needed'
        ];
        whenToSeek = [
          'If fever is above 103°F (39.4°C)',
          'If fever lasts more than 3 days',
          'If accompanied by rash, difficulty breathing, or severe pain'
        ];
        care = [
          'Use lukewarm sponge baths to reduce fever',
          'Wear lightweight clothing',
          'Monitor temperature regularly'
        ];
        severity = 'moderate';
      } else if (formData.symptoms.includes('cough')) {
        conditions = ['Common cold', 'Allergies', 'Bronchitis'];
        actions = [
          'Stay hydrated',
          'Use a humidifier',
          'Consider cough drops or honey for throat irritation'
        ];
        whenToSeek = [
          'If cough persists for more than 3 weeks',
          'If coughing up blood',
          'If accompanied by difficulty breathing or chest pain'
        ];
        care = [
          'Avoid irritants like smoke',
          'Elevate your head while sleeping',
          'Gargle with warm salt water'
        ];
        severity = formData.duration === 'more-than-2-weeks' ? 'high' : 'moderate';
      } else {
        conditions = ['Based on your symptoms, it could be a mild viral illness or other condition'];
        actions = [
          'Monitor your symptoms',
          'Get plenty of rest',
          'Stay hydrated'
        ];
        whenToSeek = [
          'If symptoms worsen or persist',
          'If you develop severe pain or difficulty breathing',
          'If you have concerns about your symptoms'
        ];
        care = [
          'Maintain good hygiene',
          'Eat nutritious foods',
          'Get adequate sleep'
        ];
        severity = 'low';
      }
      
      setAnalysis({
        possibleConditions: conditions,
        recommendedActions: actions,
        whenToSeekHelp: whenToSeek,
        selfCare: care,
        severity
      });
    }, 1500);
  };

  const handleRestart = () => {
    setShowResults(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const getSeverityClass = () => {
    switch(analysis.severity) {
      case 'high': return 'severity-high';
      case 'moderate': return 'severity-moderate';
      default: return 'severity-low';
    }
  };

  return (
    <div className="symptom-checker-page">
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
              <li><Link to="/bloodGroups">BloodGroups</Link></li>
              <li><Link to="/free-Medicines">Medicines</Link></li>
              <li><Link to="/Doctors">Doctors</Link></li>
              <li><Link className="active" to="/SymptomsChecker">SymptomsChecker</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/welfare">WelfareServices</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="symptom-checker">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="checker-container">
                <h2>AI Symptom Checker</h2>
                <p className="subtitle">Describe your symptoms and get personalized health information</p>
                
                {!showResults && !isLoading && (
                  <form className="checker-form" onSubmit={handleSubmit} ref={formRef}>
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input 
                        type="number" 
                        id="age" 
                        name="age"
                        className="form-control" 
                        min="1" 
                        max="120" 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select 
                        id="gender" 
                        name="gender"
                        className="form-control" 
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="symptoms">Describe Your Symptoms</label>
                      <textarea 
                        id="symptoms" 
                        name="symptoms"
                        className="form-control" 
                        rows="5" 
                        placeholder="Describe your symptoms in detail, including when they started, severity, and any other relevant information" 
                        required
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="duration">Duration of Symptoms</label>
                      <select 
                        id="duration" 
                        name="duration"
                        className="form-control" 
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="less-than-day">Less than a day</option>
                        <option value="1-3-days">1-3 days</option>
                        <option value="4-7-days">4-7 days</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="more-than-2-weeks">More than 2 weeks</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="additional-info">Any Other Relevant Information</label>
                      <textarea 
                        id="additional-info" 
                        name="additional-info"
                        className="form-control" 
                        rows="3" 
                        placeholder="Any pre-existing conditions, medications, or other relevant health information"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                      {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
                    </button>
                  </form>
                )}
                
                {showResults && (
                  <div className="results-container">
                    <h3>Analysis Results</h3>
                    <div className={`severity-indicator ${getSeverityClass()}`}>
                      Severity: {analysis.severity.toUpperCase()}
                    </div>
                    <div className="disclaimer">
                      <p><strong>Disclaimer:</strong> This AI symptom checker is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
                    </div>
                    
                    <div className="results-section">
                      <h4>Possible Conditions</h4>
                      <div className="condition-list">
                        <ul>
                          {analysis.possibleConditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>Recommended Actions</h4>
                      <div className="action-list">
                        <ul>
                          {analysis.recommendedActions.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>When to Seek Medical Help</h4>
                      <div className="help-list urgent-list">
                        <ul>
                          {analysis.whenToSeekHelp.map((help, index) => (
                            <li key={index}>{help}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>Self-Care Suggestions</h4>
                      <div className="care-list">
                        <ul>
                          {analysis.selfCare.map((care, index) => (
                            <li key={index}>{care}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="action-buttons">
                      <button onClick={handleRestart} className="btn btn-secondary">
                        Start New Check
                      </button>
                      <Link to="/Doctors" className="btn btn-primary">
                        Find a Doctor
                      </Link>
                    </div>
                  </div>
                )}
                
                {isLoading && (
                  <div className="loading-container">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Analyzing your symptoms...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-widget">
                <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" />
                <p>Committed to providing quality healthcare services to our community.</p>
                <div className="social-links">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-widget">
                <h3>Departments</h3>
                <ul>
                  <li><Link to="#">Eye Care</Link></li>
                  <li><Link to="#">Skin Care</Link></li>
                  <li><Link to="#">Pathology</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3>Contact Us</h3>
                <p>
                  Safdar road dab no 1 mansehra<br />
                  +92 3449864285<br />
                  contact@uzaairmalik.dev@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SymptomsChecker;