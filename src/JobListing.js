// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const JobListing = () => {
//   const jobListingStyle = {
//     card: {
//       marginBottom: '20px',
//       padding: '20px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//     },
//     title: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//     },
//     details: {
//       marginBottom: '10px',
//     },
//     button: {
//       marginTop: '10px',
//     }
//   };

//   const sidebarStyle = {
//     container: {
//       padding: '10px',
//     },
//     roleCard: {
//       padding: '10px',
//       marginBottom: '10px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//     },
//     roleTitle: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//     },
//     roleDetails: {
//       marginBottom: '5px',
//     }
//   };

//   const searchBarStyle = {
//     form: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//     input: {
//       marginRight: '10px',
//     }
//   };

//   const roles = [
//     {
//       title: 'Frontend Developer Intern - React',
//       company: 'Markytics Consulting',
//       location: 'Hybrid - Pune',
//       startsIn: 'Starts within 1 month',
//       rating: 3.2,
//       reviews: 10
//     },
//     {
//       title: 'Fullstack Developer Intern',
//       company: 'Katalisia LLP',
//       location: 'Remote',
//       startsIn: 'Starts within 1 month',
//       rating: 3.2,
//       reviews: 10
//     },
//     // Add more roles as needed
//   ];

//   return (
//     <div className="App">
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">Naukri Campus</a>
//         <SearchBar style={searchBarStyle} />
//       </nav>
//       <div className="container mt-3">
//         <div className="row">
//           <div className="col-md-8">
//             <JobListingComponent style={jobListingStyle} />
//           </div>
//           <div className="col-md-4">
//             <Sidebar roles={roles} style={sidebarStyle} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const JobListingComponent = ({ style }) => {
//   return (
//     <div className="job-listing card" style={style.card}>
//       <div className="card-body">
//         <h5 className="card-title" style={style.title}>Full Stack Developer Intern</h5>
//         <p className="card-text" style={style.details}>
//           <strong>Neemtree Internet</strong> <br />
//           <span>3 months duration | Unpaid</span> <br />
//           <span>Mumbai</span> <br />
//           <span>Starts in 1-3 months</span>
//         </p>
//         <p style={style.details}>
//           Posted: 30+ days ago <br />
//           Openings: 1 <br />
//           Applicants: 296
//         </p>
//         <button className="btn btn-primary" style={style.button}>Apply on company site</button>
//       </div>
//     </div>
//   );
// };

// const Sidebar = ({ roles, style }) => {
//   return (
//     <div className="sidebar" style={style.container}>
//       <h5>Roles you might be interested in</h5>
//       {roles.map((role, index) => (
//         <div className="role card mb-2" key={index} style={style.roleCard}>
//           <div className="card-body">
//             <h6 className="card-title" style={style.roleTitle}>{role.title}</h6>
//             <p className="card-text" style={style.roleDetails}>
//               <strong>{role.company}</strong> <br />
//               <span>{role.location}</span> <br />
//               <span>{role.startsIn}</span>
//             </p>
//             <p>
//               Rating: {role.rating} | Reviews: {role.reviews}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const SearchBar = ({ style }) => {
//   return (
//     <form className="form-inline my-2 my-lg-0" style={style.form}>
//       <input
//         className="form-control mr-sm-2"
//         type="search"
//         placeholder="Search jobs here"
//         aria-label="Search"
//         style={style.input}
//       />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//         Search
//       </button>
//     </form>
//   );
// };

// export default JobListing;
