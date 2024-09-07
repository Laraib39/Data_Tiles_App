import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon

const HamburgerMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleSubMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <>
      {/* Hamburger Icon to open the Drawer */}
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Drawer that opens from the left */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        {/* Box to align the close icon */}
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }} 
        >
          {/* Close Icon */}
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {/* Regular Menu Item */}
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          {/* Menu Item with Submenu */}
          <ListItem button onClick={handleSubMenuClick}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Sent Mail" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </Collapse>

          {/* Another Regular Menu Item */}
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;

