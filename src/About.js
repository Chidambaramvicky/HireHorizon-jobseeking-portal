import React from 'react';
import Navbar from './Navbar';

const About = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    backgroundColor: '#f4f4f4'
  };

  const headerStyle = {
    position: 'relative',
    backgroundColor: '#002D62',
    color: '#fff',
    padding: '50px 20px',
    textAlign: 'center',
    borderBottom: '5px solid #002D62'
  };

  const headerOverlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    display: 'inline-block'
  };

  const sectionStyle = {
    padding: '20px',
    textAlign: 'center'
  };

  const missionStyle = {
    background: 'linear-gradient(135deg, #f3f4f6, #e2e2e2)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const valuesStyle = {
    padding: '20px'
  };

  const valueCardsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px'
  };

  const valueCardStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const teamStyle = {
    padding: '20px',
    textAlign: 'center'
  };

  const teamCardsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px'
  };

  const teamCardStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <Navbar/>
      <header style={headerStyle}>
        <div style={headerOverlayStyle}>
          <h1>About HireHorizon</h1>
          <p>Connecting talent with opportunity, globally.</p>
        </div>
      </header>
      <section style={sectionStyle}>
        <div style={missionStyle}>
          <h2>Our Mission</h2>
          <p>
            At HireHorizon, we believe in bridging the gap between job seekers and employers. Our mission is to empower individuals by providing them with the tools and resources they need to achieve their career aspirations.
          </p>
        </div>
      </section>
      <section style={sectionStyle}>
        <h2>Our Values</h2>
        <div style={valuesStyle}>
          <div style={valueCardsStyle}>
            <div style={valueCardStyle}>
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of integrity in all our actions, ensuring trust and transparency in every interaction.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Innovation</h3>
              <p>
                We constantly seek innovative solutions to improve the job-seeking experience and stay ahead in the industry.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, aiming to exceed expectations and deliver outstanding results.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Growth</h3>
              <p>
                We are committed to continuous learning and growth, providing opportunities for personal and professional development.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Community</h3>
              <p>
                We foster a strong sense of community, encouraging collaboration and mutual support among job seekers and employers.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Inclusivity</h3>
              <p>
                We embrace diversity and strive to create an inclusive environment where everyone has an equal opportunity to succeed.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of integrity in all our actions, ensuring trust and transparency in every interaction.
              </p>
            </div>
            <div style={valueCardStyle}>
              <h3>Growth</h3>
              <p>
                We are committed to continuous learning and growth, providing opportunities for personal and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={teamStyle}>
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of professionals is committed to helping you succeed. Get to know the people behind HireHorizon.
        </p>
        <div style={teamCardsStyle}>
          <div style={teamCardStyle}>
            <h3>Darshan S</h3>
            <p>CEO & Founder</p>
          </div>
          <div style={teamCardStyle}>
            <h3>Chidambaram</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div style={teamCardStyle}>
            <h3>Boobalan</h3>
            <p>Chief Marketing Officer</p>
          </div>
          <div style={teamCardStyle}>
            <h3>Bhuvanesh S</h3>
            <p>Important Person</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
