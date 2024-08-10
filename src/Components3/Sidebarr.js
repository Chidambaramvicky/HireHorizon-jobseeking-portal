// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
// import { Home, Work, Business, People } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import logo from './logo.png'; // Make sure to provide the correct path to your logo image

// const drawerWidth = 240;

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//       }}
//     >
//       <Toolbar />
//       <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
//         <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
//       </Box>
//       <List>
//         <ListItem button component={Link} to="/add-job">
//           <ListItemIcon>
//             <Work />
//           </ListItemIcon>
//           <ListItemText primary="Add Job" />
//         </ListItem>
//         <ListItem button component={Link} to="/manage-company">
//           <ListItemIcon>
//             <Business />
//           </ListItemIcon>
//           <ListItemText primary="Manage Company" />
//         </ListItem>
//         <ListItem button component={Link} to="/applicant-details">
//           <ListItemIcon>
//             <People />
//           </ListItemIcon>
//           <ListItemText primary="Applicant Details" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
