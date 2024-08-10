import React, { useEffect } from 'react';
import './ServiceDetails.css';
import ForumIcon from '@mui/icons-material/Forum';
import SpeakerIcon from '@mui/icons-material/Speaker';
import GroupsIcon from '@mui/icons-material/Groups';
import Navbar from './Navbar';

const GroupDiscussion = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="service-details-container">
        {/* Key Features Section */}
        <div className="grid-container">
          <div className="key-features">
            <h2>Key Features</h2>
            <div className="feature-item">
              <ForumIcon fontSize="large" />
              <div>
                <h3>Interactive Sessions</h3>
                <p>Engage in real-time group discussions with peers to enhance your communication skills.</p>
              </div>
            </div>
            <div className="feature-item">
              <SpeakerIcon fontSize="large" />
              <div>
                <h3>Expert Moderation</h3>
                <p>Sessions are moderated by industry experts to ensure quality discussions and feedback.</p>
              </div>
            </div>
            <div className="feature-item">
              <GroupsIcon fontSize="large" />
              <div>
                <h3>Collaborative Learning</h3>
                <p>Learn and grow through collaborative interactions with group members.</p>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="subscription-box">
            <h2>Choose Your Package</h2>
            <div className="subscription-options">
              <div className="subscription-option-box">
                <input type="radio" name="package" id="basic-package" />
                <label htmlFor="basic-package">Trial for free<br /></label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="package" id="standard-package" />
                <label htmlFor="standard-package">Standard<br />₹2999</label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="package" id="premium-package" />
                <label htmlFor="premium-package">Premium<br />₹4999</label>
              </div>
            </div>
            <button className="buy-now">BUY NOW</button>

            {/* Discount Banner */}
            <div className="discount-banner">
              <p>Special Offer - Flat 20% off on all group discussion services. Offer valid until end of this month</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Our Group Discussion Service?</h2>
          <div className="benefit-stats">
            <div className="stat-item">
              <div className="stat-circle">
                <p>20K+</p>
                <span>Participants improved their communication skills*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>85%</p>
                <span>Reported increased confidence in group settings*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>30+</p>
                <span>Industry experts moderating discussions</span>
              </div>
            </div>
          </div>
          <p className="note">*Statistics are based on customer feedback up to August '24. Next update will follow soon</p>
        </div>
      </div>
    </div>
  );
}

export default GroupDiscussion;
