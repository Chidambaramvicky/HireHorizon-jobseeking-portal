import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import JobPage from './JobPage';
import JobSearchPage from './JobSearchPage';
import Login from './Login';
// import Navbar from './Navbar';
import SearchBox from './SearchBox';
import SignIn from './SignIn';
import JobDetail from './JobDetail';

import ApplyButton from './ApplyButton';
import Services from './Services';
import About from './About';
import JobListing from './JobListing';
import View1 from './View1';
import { UserProvider } from './UserContext';
import AdminDashboard from './AdminDashboard';
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";

import Contacts from "./scenes/contacts";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import UserApplied from "./UserApplied";
import ServiceDetails from "./ServiceDetails";
import ResumeWriting from "./ResumeWriting";
import AiMockInterview from "./AiMockInterview";
import GroupDiscussion from "./GroupDiscusion";

function App() {


   return (
    // <BrowserRouter>
    <UserProvider>
      <CssBaseline />
     <div className="App">
      {/* <Services/> */}
      {/* <LandingPage/>  */}
      {/* <Client/> */}
      {/* <GetLPTheme/> */}
      {/* <Features/> */}
      {/* <LogoCollection/> */}
      {/* <Pricing/> */}
      {/* <ToggleColorMode/> */}
       
      {/* <Highlights/>
      {/* <FAQ/> */}
      {/* <AppAppBar/> */}
      {/* <Footer/> */}
      {/* <Hero/> */}
      {/* <ApplyJobs/> 

      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Footer1/> */}
      
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignIn />} />
        <Route path="/Jobser" element={<JobSearchPage />} />
        <Route path="/JobDetail/:id" element={<JobDetail />} />
        <Route path="/ApplyButton" element={<ApplyButton />} />
        <Route path="/JobPage" element={<JobPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/JobListing" element={<JobListing />} /> */}
        <Route path="/view1" element={<View1/>} />
        <Route path="/ad" element={<AdminDashboard/>} />
        <Route path="/d" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/servicedetails" element={<ServiceDetails/>} />
        

              <Route path="/contacts" element={<Contacts />} />

              <Route path="/userapplied" element={<UserApplied />} />
               <Route path="/userapplied-resume" element={<ResumeWriting />} />
              <Route path="/userapplied-aimock" element={<AiMockInterview />} /> 
              <Route path="/userapplied-group" element={<GroupDiscussion />} /> 

      </Routes> 
   
     </div>
    </UserProvider>
    // </BrowserRouter>
  );
}
export default App;