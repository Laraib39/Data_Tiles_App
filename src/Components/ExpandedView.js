import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';

const ExpandedView = ({ item, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Username: {item.username}
        </Typography>
        <Typography variant="body1">
          Email: {item.email}
        </Typography>
        <Typography variant="body2">
          Address: {item.address.street}, {item.address.city}
        </Typography>
        <Typography variant="body2">
          Phone: {item.phone}
        </Typography>
        <Typography variant="body2">
          Company: {item.company.name}
        </Typography>
        <Button onClick={onClose} className="closeButton" variant="text" sx={{ mt: 2 }}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ExpandedView;
