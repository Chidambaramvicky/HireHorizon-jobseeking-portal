// src/HomePage.js
import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom'
import Footerr from './Footerr';
import Navbar from './Navbar';
// import Footer from './Footer';
const HomePage = () => {
  return (
    <div className="homepage">
  <Navbar/>     
     {/* <Nav2 mode={mode} toggleColorMode={toggleColorMode} /> */}
      <header className="hero" >
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter skills / designations / companies" />
          <select>
            <option>Select experience</option>
            {/* Add more options here */}
          </select>
          <input type="text" placeholder="Enter location" />
          <button className="search-btn">Search</button>
        </div>
      </header>
      <div className="promo">
        <h2>Think career, Think Horizon 360</h2>
        <p>A suite of tools, services, and resources that help you get ahead in your career</p>
        <button className="explore-btn">Start exploring</button>
      </div>
      <Footerr/>
      {/* <Footerr/> */}
      {/* <div> */}
      {/* </div> */}
    </div>  
  );
};

export default HomePage;
