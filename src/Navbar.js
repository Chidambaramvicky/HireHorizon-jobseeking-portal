// Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import logo from './Assets/images/logo.png';
import logo2 from './Assets/images/photo.jpg';
import './Navbar.css';


function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#17153B' ,boxShadow:'none',height:'50 px'}}> 
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Resume Display"
            style={{ width: '150px', height: '40px' }}
          />
        </Link>
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1 }} /> {/* Spacer */}
        <Box sx={{ display: 'flex', alignItems: 'center' , marginLeft: '40px', gap: '20px' }}>
        <Link to="/Jobser" style={{ color: 'white', position: 'relative',textDecoration: 'none'  }}>
          JOBS
        </Link>
        <Link to="/JobPage" style={{ color: 'White', textDecoration: 'none' }}>
          COMPANY
        </Link>
        <Link to="/services" style={{ color: 'white',textDecoration: 'none'  }}>
          SERVICES
        </Link>
        <Link to="/about" style={{ color: 'white',textDecoration: 'none'  }}>
          ABOUT
        </Link>
        </Box>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <Avatar alt="Profile Photo" src={logo2} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleNavigation('/login'); handleMenuClose(); }}>Login</MenuItem>
          <MenuItem onClick={() => { handleNavigation('/d'); handleMenuClose(); }}>Admin Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;