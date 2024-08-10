import React, { useEffect } from 'react';
import './ServiceDetails.css';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Navbar from './Navbar';

const ResumeWriting = () => {
    
    // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="resume-writing-container">
        {/* Key Features Section */}
        <div className="grid-container">
          <div className="key-features">
            <h2>Key Features</h2>
            <div className="feature-item">
              <CreateIcon fontSize="large" />
              <div>
                <h3>Customized Resume</h3>
                <p>Get a professionally crafted resume tailored to highlight your skills and experiences.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircleIcon fontSize="large" />
              <div>
                <h3>ATS Optimized</h3>
                <p>Your resume will be optimized for Applicant Tracking Systems (ATS) to ensure it gets noticed by recruiters.</p>
              </div>
            </div>
            <div className="feature-item">
              <VerifiedUserIcon fontSize="large" />
              <div>
                <h3>Industry Expertise</h3>
                <p>Our writers are experts in various industries and will tailor your resume to meet industry standards.</p>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="subscription-box">
            <h2>Choose Your Package</h2>
            <div className="subscription-options">
              <div className="subscription-option-box">
                <input type="radio" name="package" id="basic-package" />
                <label htmlFor="basic-package">Trail for free<br /></label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="package" id="standard-package" />
                <label htmlFor="standard-package">Standard<br />₹3999</label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="package" id="premium-package" />
                <label htmlFor="premium-package">Premium<br />₹5999</label>
              </div>
            </div>
            <button className="buy-now">BUY NOW</button>

            {/* Discount Banner */}
            <div className="discount-banner">
              <p>Special Freshers Discount - Flat 20% off on all resume writing services. Offer valid until end of this month</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Our Resume Writing Service?</h2>
          <div className="benefit-stats">
            <div className="stat-item">
              <div className="stat-circle">
                <p>50K+</p>
                <span>Resumes crafted with a 99% satisfaction rate*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>40%</p>
                <span>Increase in interview calls after using our service*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>25+</p>
                <span>Expert writers with industry-specific knowledge</span>
              </div>
            </div>
          </div>
          <p className="note">*Statistics are based on customer feedback up to August '24. Next update will follow soon</p>
        </div>
      </div>
    </div>
  );
}

export default ResumeWriting;
