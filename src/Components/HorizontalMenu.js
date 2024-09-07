import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';

const HorizontalMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);   

  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#182978', padding: '10px 20px' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Hamburger Menu (Left) */}
        <HamburgerMenu />
        {/* Logo or brand name (Left) */}
        <Box sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>MyBrand</Box>
        {/* Horizontal menu (Right) */}
        <div style={{ marginLeft: '5%' }}>
          <Button sx={menuButtonStyles}>Home</Button>
          <Button
            sx={menuButtonStyles}
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} sx={menuItemStyles}>Web Development</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={menuItemStyles}>Mobile Apps</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={menuItemStyles}>UI/UX Design</MenuItem>
          </Menu>
          <Button sx={menuButtonStyles}>Portfolio</Button>
          <Button sx={menuButtonStyles}>About Us</Button>
          <Button sx={menuButtonStyles}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// Styles for buttons and menu items
const menuButtonStyles = {
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: '#303f9f', // Darker hover effect
  },
};

const menuItemStyles = {
  color: '#3f51b5',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
};

export default HorizontalMenu;