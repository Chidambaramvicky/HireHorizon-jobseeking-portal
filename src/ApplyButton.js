import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jk from './Assets/images/new3.jpg';

const ApplyButton = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);

  const OnformSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please fill the name first");
    } else {
      alert("Your Job Application has been Applied Successfully");
      navigate("/Jobs");
    }
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'center',
  };

  const imageSectionStyle = {
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    border: '2px ',
    transform: isImageHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const applyImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  };

  const formSectionStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
    border: '2px solid #e6c759',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    transform: isFormHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const formGroupStyle = {
    marginBottom: '15px'
  };

  const formControlStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px solid'
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div className="apply-job">
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 className="post-job">Fill the form </h1>
        </header>
        <div style={gridContainerStyle}>
          <div
            style={imageSectionStyle}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img src={jk} alt="Apply Job" style={applyImageStyle} />
          </div>
          <div
            style={formSectionStyle}
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={() => setIsFormHovered(false)}
          >
            <form onSubmit={OnformSubmit}>
              <div style={formGroupStyle}>
                <label id="name-label" htmlFor="name">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  style={formControlStyle}
                  required
                />
              </div>
              <div style={formGroupStyle}>
                <label>
                  Upload Your Resume
                </label>
                <label>
                  <input type="file" id="myFile" name="filename" required />
                </label>
              </div>
              <div style={formGroupStyle}>
                <button
                  type="submit"
                  style={submitButtonStyle}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyButton;
