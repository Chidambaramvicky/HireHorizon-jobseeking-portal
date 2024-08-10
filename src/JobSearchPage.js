import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './JobSearchPage.css';
import Navbar from './Navbar';

const JobSearchPage = () => {
  const [filters, setFilters] = useState({
    workMode: '',
    experience: 1,
    department: [],
    salary: [],
    companyType: []
  });

  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get('http://localhost:9009/api/users/addjob');
        console.log('Job Listings:', response.data); // Log API response
        setJobListings(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobListings();
  }, []);

  const handleClearAll = () => {
    setFilters({
      workMode: '',
      experience: 1,
      department: [],
      salary: [],
      companyType: []
    });
  };

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];
      return {
        ...prevFilters,
        [category]: updatedCategory
      };
    });
  };

  return (
    <div className="jobsearch-page">
      <Navbar />
      
      <div className="content" style={{ backgroundColor: 'white' }}>
   
        <aside className="filters">
          <button className="clear-all2" onClick={handleClearAll}>Clear All</button>

          <div className="filter-group">
            <h4>Work mode</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.workMode === 'Work from office'}
                onChange={() => setFilters({ ...filters, workMode: 'Work from office' })}
              />
              Work from office (519)
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.workMode === 'Hybrid'}
                onChange={() => setFilters({ ...filters, workMode: 'Hybrid' })}
              />
              Hybrid (14)
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.workMode === 'Remote'}
                onChange={() => setFilters({ ...filters, workMode: 'Remote' })}
              />
              Remote (5)
            </label>
          </div>

          <div className="filter-group">
            <h4>Experience</h4>
            <input
              type="range"
              min="0"
              max="30"
              value={filters.experience}
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            />
            <div>{filters.experience} Yrs</div>
          </div>

          <div className="filter-group">
            <h4>Department</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.department.includes('Sales Development')}
                onChange={() => handleCheckboxChange('department', 'Sales Development')}
              />
              Sales Development
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.department.includes('Customer Success')}
                onChange={() => handleCheckboxChange('department', 'Customer Success')}
              />
              Customer Success
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.department.includes('Human Resources')}
                onChange={() => handleCheckboxChange('department', 'Human Resources')}
              />
              Human Resources
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.department.includes('Consulting')}
                onChange={() => handleCheckboxChange('department', 'Consulting')}
              />
              Consulting
            </label>
          </div>

          <div className="filter-group">
            <h4>Salary</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.salary.includes('0-3 Lakhs')}
                onChange={() => handleCheckboxChange('salary', '0-3 Lakhs')}
              />
              0-3 Lakhs
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.salary.includes('3-6 Lakhs')}
                onChange={() => handleCheckboxChange('salary', '3-6 Lakhs')}
              />
              3-6 Lakhs
            </label>
          </div>

          <div className="filter-group">
            <h4>Company Type</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.companyType.includes('Corporate')}
                onChange={() => handleCheckboxChange('companyType', 'Corporate')}
              />
              Corporate
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.companyType.includes('Foreign MNC')}
                onChange={() => handleCheckboxChange('companyType', 'Foreign MNC')}
              />
              Foreign MNC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.companyType.includes('Indian MNC')}
                onChange={() => handleCheckboxChange('companyType', 'Indian MNC')}
              />
              Indian MNC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.companyType.includes('StartUp')}
                onChange={() => handleCheckboxChange('companyType', 'StartUp')}
              />
              StartUp
            </label>
          </div>
        </aside>

        <main className="job-listings">
          {jobListings.map((job) => (
            <div className="job-card" key={job.id}>
              <Link to={`/jobdetail/${job.id}`} style={{ textDecoration: 'none' }}>
                <h2>{job.title}</h2>
              </Link>
              <p>{job.company}</p>
              <div className="job-details">
                <span>{job.date}</span>
                <span>{job.salary}</span>
                <span>{job.experience}</span>
                <span>{job.location}</span>
              </div>
              <div className="job-tags">
                {Array.isArray(job.tags) ? (
                  job.tags.length > 0 ? (
                    job.tags.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))
                  ) : (
                    <span>No tags available</span>
                  )
                ) : (
                  <span>No tags available</span>
                )}
              </div>
              <div className="job-meta">
                <span>{job.type}</span>
                <span>{job.posted}</span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default JobSearchPage;
