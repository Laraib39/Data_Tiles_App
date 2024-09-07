import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const EditView = ({ item, onSave, onClose }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleInputChange = (field, value) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const handleAddressChange = (field, value) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      address: {
        ...prevItem.address,
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(editedItem);  // Save the updated item
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={editedItem.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          fullWidth
        />
        <TextField
          label="Username"
          value={editedItem.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={editedItem.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          fullWidth
        />
        <TextField
          label="Address"
          value={editedItem.address.street}
          onChange={(e) => handleAddressChange('street', e.target.value)}
          fullWidth
        />
        <TextField
          label="City"
          value={editedItem.address.city}
          onChange={(e) => handleAddressChange('city', e.target.value)}
          fullWidth
        />
        <Button onClick={handleSave} variant="contained" sx={{ mt: 2 }}>
          Save
        </Button>
        <Button onClick={onClose} variant="text" sx={{ mt: 2 }}>
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditView;
