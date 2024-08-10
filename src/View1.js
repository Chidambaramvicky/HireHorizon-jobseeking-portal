import React, { useState } from 'react';
import './View1.css';
import { FaSave } from 'react-icons/fa';
import ApplyForm from './ApplyForm'; // Import the ApplyForm component

import new3 from './Assets/images/tcs.webp';
import Navbar from './Navbar';
// import newImage from './path/to/your/uploaded/image.png'; // Import the uploaded image

const View1 = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [savedJobs, setSavedJobs] = useState({});
    const [appliedJobs, setAppliedJobs] = useState({});
    const [isApplyFormVisible, setIsApplyFormVisible] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
    };

    const handleSaveClick = (jobId) => {
        setSavedJobs((prevSavedJobs) => ({
            ...prevSavedJobs,
            [jobId]: !prevSavedJobs[jobId]
        }));
    };

    const handleApplyClick = (jobTitle) => {
        setSelectedJobTitle(jobTitle);
        setIsApplyFormVisible(true);
    };

    const handleFormSubmit = (jobTitle) => {
        setAppliedJobs((prevAppliedJobs) => ({
            ...prevAppliedJobs,
            [jobTitle]: true
        }));
        setIsApplyFormVisible(false); // Hide the form after submission
    };

    const closeApplyForm = () => {
        setIsApplyFormVisible(false);
        setSelectedJobTitle('');
    };

    return (
        <div>
            <Navbar/>

        <div className="view2-container1">
        </div>
            <section className="content1">
                {/* <div className="banner1">
                    <h1>We're among the <br /> Top 50 Inspiring Workplaces EMEA</h1>
                    <p>for outstanding work in Culture & Purpose</p> */}
                    {/* <img src="onlineres.avif" alt="Top 50 Inspiring Workplaces" className="badge" /> */}
                {/* </div> */}
                <div className="company-info1">
                    <img src={new3} alt="TCS Logo" className="company-logo1" />
                    <div className="company-details1">
                        <h2>Tata Consulting Services</h2>
                        <p>Transforming the Future, Now</p>
                        <div className="tags1">
                            <span>IT Services & Consulting</span>
                            <span>Private</span>
                            <span>Foreign MNC</span>
                            <span>B2B</span>
                        </div>
                        <div className="followers1">
                            <p>79.8K followers</p>
                            <button className="follow-btn1" onClick={handleFollowClick}>
                                {isFollowed ? "Following" : "+ Follow"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="job-listings1">
                    <div className="job-card1">
                        <div className="job-info1">
                            <h3>ReactJS Developer</h3>
                            <p>TCS India Pvt Ltd</p>
                            <p><span>⭐ 3.4</span> (596 Reviews)</p>
                            <div className="job-meta1">
                                <span>2-6 Yrs</span>
                                <span>₹ Not disclosed</span>
                                <span>Pune, Bengaluru</span>
                            </div>
                            <p>3 - 7 years of experience react front end development experience. Experience of building and deploying...</p>
                            <div className="job-tags1">
                                <span>Front end</span>
                                <span> -Cloud</span>
                                <span> -Deployment</span>
                                <span> -React.js</span>
                            </div>
                            <p className="job-date1">30+ Days Ago</p>
                        </div>
                        <div className="job-save1">
                            <img src={new3} alt="TCS Logo" className="job-logo1" />
                            <div className="job-actions1">
                                <button
                                    className="save-btn1"
                                    onClick={() => handleSaveClick(1)}
                                >
                                    <FaSave className="save-icon" />
                                    {savedJobs[1] ? "Saved" : "Save"}
                                </button>
                                <button
                                    className="apply-btn1"
                                    onClick={() => handleApplyClick("ReactJS Developer")}
                                    disabled={appliedJobs["ReactJS Developer"]}
                                >
                                    {appliedJobs["ReactJS Developer"] ? "Applied" : "Apply"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card1">
                        <div className="job-info1">
                            <h3>C Developer</h3>
                            <p>TCS India Pvt Ltd</p>
                            <p><span>⭐ 3.8</span> (496 Reviews)</p>
                            <div className="job-meta1">
                                <span>2-6 Yrs</span>
                                <span>₹ Not disclosed</span>
                                <span>Pune, Bengaluru</span>
                            </div>
                            <p>Programming experience with C / C# or Windows Desktop applications. Memory management...</p>
                            <div className="job-tags1">
                                <span>Multithreading</span>
                                <span> -Networking</span>
                                <span> -Debugging</span>
                                <span> -Consulting</span>
                            </div>
                            <p className="job-date1">30+ Days Ago</p>
                        </div>
                        <div className="job-save1">
                            <img src={new3} alt="TCS Logo" className="job-logo1" />
                            <div className="job-actions1">
                                <button
                                    className="save-btn1"
                                    onClick={() => handleSaveClick(2)}
                                >
                                    <FaSave className="save-icon1" />
                                    {savedJobs[2] ? "Saved" : "Save"}
                                </button>
                                <button
                                    className="apply-btn1"
                                    onClick={() => handleApplyClick("C Developer")}
                                    disabled={appliedJobs["C Developer"]}
                                >
                                    {appliedJobs["C Developer"] ? "Applied" : "Apply"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="job-card1">
                        <div className="job-info1">
                            <h3>Java Developer</h3>
                            <p>TCS India Pvt Ltd</p>
                            <p><span>⭐ 4.1</span> (696 Reviews)</p>
                            <div className="job-meta1">
                                <span>2-6 Yrs</span>
                                <span>₹ Not disclosed</span>
                                <span>Pune, Bengaluru</span>
                            </div>
                            <p>Programming experience with Java / Advanced Java or Windows Desktop applications...</p>
                            <div className="job-tags1">
                                <span>Multithreading</span>
                                <span> -Networking</span>
                                <span> -Debugging</span>
                                <span> -Consulting</span>
                            </div>
                            <p className="job-date1">30+ Days Ago</p>
                        </div>
                        <div className="job-save1">
                            <img src={new3} alt="TCS Logo" className="job-logo1" />
                            <div className="job-actions1">
                                <button
                                    className="save-btn1"
                                    onClick={() => handleSaveClick(3)}
                                >
                                    <FaSave className="save-icon1" />
                                    {savedJobs[3] ? "Saved" : "Save"}
                                </button>
                                <button
                                    className="apply-btn1"
                                    onClick={() => handleApplyClick("Java Developer")}
                                    disabled={appliedJobs["Java Developer"]}
                                >
                                    {appliedJobs["Java Developer"] ? "Applied" : "Apply"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isApplyFormVisible && (
                <ApplyForm
                    jobTitle={selectedJobTitle}
                    onClose={closeApplyForm}
                    onFormSubmit={() => handleFormSubmit(selectedJobTitle)}
                />
            )}
        </div>
    );
};

export default View1;
