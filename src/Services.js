import React from 'react';
import './Services.css';
import i1 from'./Assets/images/i1.jpg'
import inter from'./Assets/images/inter.webp'
import interplace from'./Assets/images/interplace.webp'
import jobs from'./Assets/images/jobs.jpg'
import group from'./Assets/images/group.avif'
import un from'./Assets/images/un.jpg'
import res from'./Assets/images/res.png'
import recu from'./Assets/images/recu.png'
import './Services.css'
import new3 from'./Assets/images/new3.jpg'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-container23">
   <Navbar/>
      <div className="main-content23">
        <h1>Move ahead in career, faster</h1>
        <h2>with our paid services</h2>
        <div className="services23">
        <div className="service-item23">
        <div className="badge recommended23">Free Trial</div>
            <img src={res} alt="Resume Critique" className="service-image23"  style={{  height: '125px' }}/>
            <div className="service-content23">
              <h4>RESUME WRITING </h4>
              <p>Resume tailored to highlight your achievements.<br /></p>
              <Link to="/userapplied-resume" style={{textDecoration:'none'}}>
               <p>        Try for free now!</p>
            </Link>
            </div>
          </div>
        
          <div className="service-item23">
            <div className="badge free-trial23">Free Trial</div>
            <img src={interplace} alt="AI Mock Interview" className="service-image23"  style={{  height: '125px' }}/>
            <div className="service-content23">
              <h4>AI Mock Interview</h4>
              <p>Personalised AI driven mock interviews</p>
              <Link to="/userapplied-aimock" style={{textDecoration:'none'}}>
               <p>        Try for free now!</p>
            </Link>
              {/* <p><strong>₹296 for 3 Months</strong></p> */}
              {/* <a href="#learn-more">KNOW MORE</a> */}
            </div>
          </div>
          <div className="service-item23">
          <div className="badge recommended23">RECOMMENDED</div>
            <img src={inter} alt="Priority Applicant" className="service-image2"  style={{ width: '210px', height: '133px' }}/>
            <div className="service-content23">
              <h4>RESUME DISPLAY</h4>
              <p className='para23'>Increase your Profile Visibility.</p>
              {/* <p><span>Subscription starts from</span> </p> */}
              <Link to="/userapplied-resume" style={{textDecoration:'none'}}>
               <p>        Try for free now!</p>
            </Link>
            <span>
                 {/* <a href="#learn-more">KNOW MORE</a> */}
                </span> 
            </div>
          </div>
          <div className="service-item23">
            <div className="badge recommended23">RECOMMENDED</div>
            <img src={group} alt="Resume Display" className="service-image23" style={{  height: '125px' }} />
            <div className="service-content23">
           
              <h4>Group Discussion</h4>
              <p>Enhance your skills with structured group!</p>
             
              <Link to="/userapplied-group" style={{textDecoration:'none'}}>
               <p>        Try for free now!</p>
            </Link>
              {/* <a href="#learn-more">KNOW MORE</a> */}
          
            </div>
          </div>
        </div>
        <div className="new-services23">
        
          <div className="service-item23">
            
          <div className="badge recommended23">New</div>
            <img src={jobs} alt="Jobs for You" className="service-image23"  style={{ height: '125px' }} />
            <div className="service-content23">
              <h4>JOBS FOR YOU</h4>
              <p>Personalized job based on your profile!<br /></p>
              <Link to="/servicedetails" style={{textDecoration:'none'}}>
               <p> ₹ 4999 for 3 Months</p>
            </Link>
            </div>
          </div>
          <div className="service-item23">
            <div className="badge recommended23">RECOMMENDED</div>
            <img src={i1} alt="Resume Display" className="service-image23" style={{ height: '125x' }}  />
            <div className="service-content23">
              <h4>PRIORITY APPLICANT</h4>
              <p>Increase your chance of getting a call.<br /></p>
              <p><span>
                {/* Subscription starts from  */}
                </span></p>
                <Link to="/servicedetails" style={{textDecoration:'none'}}>
               <p> ₹ 5999 for 4 Months</p>
            </Link>
              {/* <a href="#learn-more">KNOW MORE</a> */}
            </div>
          </div>
        
          
          <div className="service-item23">
          <div className="badge recommended23">Free Trial</div>
            <img src={recu} alt="Recruiter Connection" className="service-image23"style={{ height: '125px' }} />
            <div className="service-content23">
              <h4>RECRUITER CONNECTION</h4>
              <p>Directly connect with recruiters ,increase your chances.</p>
              <Link to="/servicedetails" style={{textDecoration:'none'}}>
               <p> ₹ 999 for 1 Month</p>
            </Link>
            </div>
            
         
          </div>
          <div className="service-item23">

          <div className="badge recommended23">MOST POPULAR</div>
            <img src={un} alt="Resume Critique" className="service-image23" style={{ height: '125px' }}/>
            <div className="service-content23">
              <h4>RESUME CRITIQUE</h4>
              <p> Receive expert feedback on your resume to improves.</p>
            
              <Link to="/servicedetails" style={{textDecoration:'none'}}>
               <p> ₹ 999 for 1 Month</p>
            </Link> 
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section23">
        <div className="contact-box23">
          <h3>Talk to Us</h3><br></br>
          <p>Call us Toll Free: 1800-102-5557<br /><br></br>
          (9.00 AM to 9.00 PM IST)</p><br></br>
          <p>International Customer Call: +91-120-4021100</p><br></br>
          <p>For bulk queries call: 18001034477</p>
          <br></br>
          <br></br>
          <img src={new3} alt="Resume Display3" className="service-image23"  style={{width:'380px',height:'300px' }} />
        </div>
        <div className="contact-form23">
          <h3>CONTACT US</h3>
          <p>The information will only be used to reach out to you for Naukri related services.</p>
          <form>
            <label>Name*</label>
            <input type="text" placeholder="Type your name here" required />
            <label>Email ID*</label>
            <input type="email" placeholder="Type your email here" required />
            <label>Mobile*</label>
            <input type="tel" placeholder="Type your mobile number" required />
            <label>Write your query here*</label>
            <textarea placeholder="e.g. I am interested" required></textarea>
            <button type="submit">CALL ME BACK</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Services;
