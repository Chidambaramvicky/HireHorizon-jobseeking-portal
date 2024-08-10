// src/components/JobRecommendations.js
import React from 'react';

function JobRecomen({ recommendations }) {
  return (
    <div className="job-recommendations">
      <h3>Jobs you might be interested in</h3>
      {recommendations.map((rec, index) => (
        <div key={index} className="job-recommendation">
          <h4>{rec.title}</h4>
          <p>{rec.company}</p>
          <p>{rec.location}</p>
          <p>{rec.reviews ? rec.reviews : ''}</p>
          <p><small>Posted: {rec.posted}</small></p>
        </div>
      ))}
    </div>
  );
}

export default JobRecomen;
