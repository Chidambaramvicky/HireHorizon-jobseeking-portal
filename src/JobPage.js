import React from 'react';
import './JobPage.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const JobPage = () => {
  const companies = [
    {
      // name: 'Coforge',
      rating: 4.5,
      reviews: '41.1K+ reviews',
      tags: ['Service Based', 'Indian MNC', 'IT Services'],
      logo: require('./Assets/images/tcs.webp'),
    },
    {
      // name: 'Infosys',
      rating: 4.8,
      reviews: '33.9K+ reviews',
      tags: ['Software', 'Developer', 'Application'],
      logo: require('./Assets/images/infosys.png'),
      // logo: 'path_to_infosys_logo',
    },
    {
      rating: 4.1,
      reviews: '523 reviews',
      tags: ['IT Services & Consulting', 'Emerging Technologies', 'B2B'],  
      logo: require('./Assets/images/facebook.png'),
    },
    {
      rating: 4.0,
      reviews: '94 reviews',
      tags: ['Internet', 'IT Services & Consulting', 'Foreign MNC', 'B2B'],
      logo: require('./Assets/images/deloitte.png'),
    },
    {
      rating: 3.9,
      reviews: '34 reviews',
      tags: ['B2B', 'Product', 'Foreign MNC', 'Software Product'],
      logo: require('./Assets/images/ibm.jpeg'),
    },
    {
      rating: 3.7,
      reviews: '412 reviews',
      tags: ['B2B', 'Public', 'Foreign MNC', 'Software Product', 'Service'],
      logo: require('./Assets/images/sap.jpeg'),
    },
    {
      rating: 4.2,
      reviews: '126 reviews',
      tags: ['IT Services & Consulting', 'Software Product', 'Foreign MNC'],
      logo: require('./Assets/images/cognizant.webp'),
    },
    {
      rating: 3.7,
      reviews: '28.8K+ reviews',
      tags: ['IT Services & Consulting', 'Indian MNC', 'Fortune500'],
      logo: require('./Assets/images/accenture.jpeg'),
    },
  ];

  return (
    <div className="jobpage">
      <Navbar />
      <header className="hero" style={{ backgroundColor: 'white' }}>
        <h1 style={{ color: '#17153B' }}>Sponsored Companies</h1>
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}><Link to={"/view1"}  style={{  textDecoration: 'none'}}>

              <div className="company-info">
                <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
                <h2>{company.name}</h2>
                <div className="rating">
                  <span>⭐ {company.rating}</span> | {company.reviews}
                </div>
                <div className="tags">
                  {company.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
                  </Link>
            </div>
          ))}
        </div>
        <button className="view-all-btn">
          <a href='https://www.ambitionbox.com/list-of-companies' style={{ color: 'black', textDecoration: 'none' }}>View all companies</a>
        </button>
      </header>
    </div>
  );
};

export default JobPage;
