import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footerr = () => {
  const footerStyle = {
    backgroundColor: '#e6c759',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    fontFamily: 'Arial, sans-serif'
  };

  const contactStyle = {
    marginBottom: '20px'
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px'
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#333'
  };

  const contentInfoStyle = {
    margin: '20px 0',
    fontSize: '14px',
    color: '#555'
  };

  const linksStyle = {
    margin: '10px 0'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 10px'
  };

  const copyrightInfoStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#555'
  };

  const footerBottomStyle = {
    marginTop: '10px',
    fontSize: '12px',
    color: '#777'
  };

  return (
    <footer style={footerStyle}>
      <div style={contactStyle}>
        <span role="img" aria-label="contact" style={iconStyle}>👤</span> CONTACT US
        <div style={socialIconsStyle}>
          <a href="https://www.facebook.com/HireHorizon" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/HireHorizon" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/hirehorizon" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/hirehorizon" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div style={contentInfoStyle}>
        Content of this website is designed, developed, hosted, owned, and managed by HireHorizon.
      </div>
      {/* <div style={linksStyle}>
        <a href="#copyright" style={linkStyle}>Copyright</a>
        <a href="#privacy" style={linkStyle}>Privacy</a>
        <a href="#disclaimer" style={linkStyle}>Disclaimer</a>
      </div> */}
      {/* <div style={copyrightInfoStyle}>
        &copy; 2024 Copyright: HireHorizon
      </div>
      <div style={footerBottomStyle}>
        Copyright All Rights Reserved. HireHorizon
      </div> */}
    </footer>
  );
};

export default Footerr;
