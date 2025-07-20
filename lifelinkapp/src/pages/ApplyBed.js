import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { applyForBed } from '../services/bedService';

const ApplyBed = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    contactNumber: '',
    address: '',
    symptoms: '',
    urgencyLevel: 'medium',
    medicalHistory: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || '',
        contactNumber: user.phone || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
    } else if (formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1-120';
    }
    
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10,15}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Must be 10-15 digits';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.symptoms.trim()) {
      newErrors.symptoms = 'Symptoms description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  setIsSubmitting(true);
  
  try {
    // Ensure the data structure matches backend expectations
    const submissionData = {
      fullName: formData.fullName,
      age: formData.age,
      contactNumber: formData.contactNumber, // Keep same name as backend
      address: formData.address,
      symptoms: formData.symptoms,
      urgencyLevel: formData.urgencyLevel,
      medicalHistory: formData.medicalHistory,
      user: user?.id || null
    };

    const response = await applyForBed(submissionData);

    if (!response.success) {
      throw new Error(response.error || 'Submission failed');
    }

    setSuccess(true);
    setTimeout(() => navigate('/', { 
      state: { 
        alert: {
          type: 'success',
          message: 'Application submitted successfully!'
        } 
      } 
    }), 2000);
  } catch (err) {
    console.error('Submission error:', err);
    
    if (err.response?.data?.errors) {
      setErrors(err.response.data.errors);
    } else {
      setErrors({
        form: err.message || 'Failed to submit application. Please try again.'
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  if (success) {
    return (
      <div className="container my-5 text-center">
        <div className="card p-5 shadow-lg success-card">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="text-success mb-3">Application Submitted!</h2>
          <p className="lead">Your bed request has been received.</p>
          <p>Our team will review your application and contact you shortly.</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 apply-bed-container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0 text-center">Hospital Bed Application</h2>
            </div>
            
            <div className="card-body p-4">
              {errors.form && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {errors.form}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setErrors(prev => ({ ...prev, form: '' }))}
                  />
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="age" className="form-label">
                      Age <span className="text-danger">*</span>
                    </label>
                    <input 
                      type="number" 
                      className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                      id="age" 
                      name="age" 
                      min="1"
                      max="120"
                      value={formData.age} 
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.age && (
                      <div className="invalid-feedback">{errors.age}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number <span className="text-danger">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                    id="contactNumber" 
                    name="contactNumber" 
                    pattern="[0-9]{10,15}"
                    value={formData.contactNumber} 
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.contactNumber && (
                    <div className="invalid-feedback">{errors.contactNumber}</div>
                  )}
                  <small className="text-muted">Format: 10-15 digits, numbers only</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Full Address <span className="text-danger">*</span>
                  </label>
                  <textarea 
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    rows="3"
                    disabled={isSubmitting}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="urgencyLevel" className="form-label">
                    Urgency Level <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="urgencyLevel"
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option value="low">Low (Non-emergency)</option>
                    <option value="medium">Medium (Urgent but stable)</option>
                    <option value="high">High (Emergency)</option>
                    <option value="critical">Critical (Life-threatening)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="symptoms" className="form-label">
                    Symptoms Description <span className="text-danger">*</span>
                  </label>
                  <textarea 
                    className={`form-control ${errors.symptoms ? 'is-invalid' : ''}`}
                    id="symptoms" 
                    name="symptoms" 
                    value={formData.symptoms} 
                    onChange={handleChange}
                    rows="5"
                    disabled={isSubmitting}
                    placeholder="Describe your symptoms in detail including duration and severity"
                  />
                  {errors.symptoms && (
                    <div className="invalid-feedback">{errors.symptoms}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="medicalHistory" className="form-label">
                    Medical History (Optional)
                  </label>
                  <textarea 
                    className="form-control" 
                    id="medicalHistory" 
                    name="medicalHistory" 
                    value={formData.medicalHistory} 
                    onChange={handleChange}
                    rows="3"
                    disabled={isSubmitting}
                    placeholder="Any pre-existing conditions, allergies, or current medications"
                  />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary me-md-2"
                    onClick={() => navigate(-1)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyBed;