import{ React ,useEffect}from 'react';
import './ServiceDetails.css';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Navbar from './Navbar';

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="service-details-container">
        {/* Key Features Section */}
        <div className="grid-container">
          <div className="key-features">
            <h2>Key Features</h2>
            <div className="feature-item">
              <PersonIcon fontSize="large" />
              <div>
                <h3>Highlight Your Profile</h3>
                <p>Your profile is marked as "Featured" to make you stand out in the database as an active jobseeker.</p>
              </div>
            </div>
            <div className="feature-item">
              <BarChartIcon fontSize="large" />
              <div>
                <h3>Rank Higher In Search Results</h3>
                <p>Your profile is given a higher rank when recruiters search CVs in the database.</p>
              </div>
            </div>
            <div className="feature-item">
              <HandshakeIcon fontSize="large" />
              <div>
                <h3>A Dedicated Relationship Manager Post Purchase</h3>
                <p>A dedicated relationship manager will resolve any queries post-purchase.</p>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="subscription-box">
            <h2>Choose Subscription</h2>
            <div className="subscription-options">
              <div className="subscription-option-box">
                <input type="radio" name="subscription" id="one-month" />
                <label htmlFor="one-month">1 Month<br />₹999*</label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="subscription" id="three-months" />
                <label htmlFor="three-months">3 Months<br />₹4999</label>
              </div>
              <div className="subscription-option-box">
                <input type="radio" name="subscription" id="six-months" />
                <label htmlFor="six-months">6 Months<br />₹5999</label>
              </div>
            </div>
            <button className="buy-now">BUY NOW</button>

            {/* Discount Banner */}
            <div className="discount-banner">
              <p>Special Freshers Discount - Flat 30% off on all services. Offer expiring soon</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>How our customers are getting benefitted?</h2>
          <div className="benefit-stats">
            <div className="stat-item">
              <div className="stat-circle">
                <p>4.45L</p>
                <span>Got recruiter calls using this service*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>38.79%</p>
                <span>Increase in profile reach to recruiters*</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <p>81,656</p>
                <span>Users bought this service so far</span>
              </div>
            </div>
          </div>
          <p className="note">*The figure has been calculated till 1st Aug '24. Next update will be done soon</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
