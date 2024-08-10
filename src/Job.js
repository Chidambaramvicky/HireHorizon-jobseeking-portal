// JobList.js
import React from 'react';

function Job({ searchQuery, location }) {
  // Here, you would normally fetch and filter jobs based on searchQuery and location
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Corp', location: 'Coimbatore' },
    { id: 2, title: 'Data Analyst', company: 'XYZ Ltd', location: 'Coimbatore' },
  ];

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Job;
