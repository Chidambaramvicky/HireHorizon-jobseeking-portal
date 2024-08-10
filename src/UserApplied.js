import React, { useEffect, useState } from 'react';
import './UserApplied.css';

const UserApplied = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9009/api/users/applicants')
            .then(response => response.json())
            .then(data => setApplicants(data))
            .catch(error => console.error('Error fetching applicants:', error));
    }, []);

    return (
        <div className="user-applied-container">
            <h2>Applied Job Users</h2>
            <table className="applicants-table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th>Resume Headline</th>
                        <th>Resume File</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{applicant.fullName}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.gender}</td>
                            <td>{applicant.age}</td>
                            <td>{applicant.education}</td>
                            <td>{applicant.experience}</td>
                            <td>{applicant.location}</td>
                            <td>{applicant.resumeHeadline}</td>
                            <td><a href={`http://localhost:9009/api/users/resume/${applicant.id}`} download>Download</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserApplied;
