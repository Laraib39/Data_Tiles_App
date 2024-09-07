import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { Edit, Flag, Delete } from '@mui/icons-material';
import ExpandedView from './ExpandedView';
import EditView from './EditView';  // Import the EditView component

const TileView = () => {
  const [users, setUsers] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const [editingItem, setEditingItem] = useState(null); // Track the user being edited
  const [loading, setLoading] = useState(true);
  const [flaggedUsers, setFlaggedUsers] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Expand tile to show more details
  const handleExpand = (item) => {
    setExpandedItem(item);
  };

  // Open the edit view when edit icon is clicked
  const handleEdit = (item) => {
    setEditingItem(item); // Set the item to be edited
  };

  // Remove user from the list when delete icon is clicked
  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Toggle flag icon color when clicked
  const handleFlagClick = (userId) => {
    setFlaggedUsers((prevFlagged) => ({
      ...prevFlagged,
      [userId]: !prevFlagged[userId], // Toggle flag state for the specific user
    }));
  };

  // Update the user data after editing
  const handleSaveEdit = (updatedItem) => {
    setUsers(users.map(user => (user.id === updatedItem.id ? updatedItem : user))); // Update the user in the list
    setEditingItem(null); // Close edit view
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : expandedItem ? (
        <ExpandedView item={expandedItem} onClose={() => setExpandedItem(null)} />
      ) : editingItem ? (
        <EditView 
          item={editingItem} 
          onSave={handleSaveEdit}  // Handle saving edited data
          onClose={() => setEditingItem(null)}  // Close edit view
        />
      ) : (
        <Grid container spacing={2} className="grid-container">
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id} onClick={() => handleExpand(user)} className="tile">
              <Card variant="outlined" style={{ height: '100%', width: '100%' }} className="tileCard">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="p" color="textSecondary">
                    {user.username}
                  </Typography>
                  <Typography variant="body2">
                    {user.email}
                  </Typography>
                </CardContent>
                <CardActions className="tile-icons">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the expand function
                      handleEdit(user);  // Open edit view
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the expand function
                      handleFlagClick(user.id);
                    }}
                  >
                    <Flag className={`flag-icon ${flaggedUsers[user.id] ? 'flagged' : ''}`} />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the expand function
                      handleDelete(user.id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default TileView;




// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
// import { Edit, Flag, Delete } from '@mui/icons-material';
// import ExpandedView from './ExpandedView';

// const TileView = () => {
//   const [users, setUsers] = useState([]);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [flaggedUsers, setFlaggedUsers] = useState({}); // Track flag icon state for each user

//   // Fetch data from public API when component mounts
//   useEffect(() => {
//     setLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchData();
//   }, []);

//   // Expand tile to show more details
//   const handleExpand = (item) => {
//     setExpandedItem(item);
//   };

//   // Remove user from the list when delete icon is clicked
//   const handleDelete = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//   };

//   // Toggle flag icon color when clicked
//   const handleFlagClick = (userId) => {
//     setFlaggedUsers((prevFlagged) => ({
//       ...prevFlagged,
//       [userId]: !prevFlagged[userId], // Toggle flag state for the specific user
//     }));
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>  // Show loading text or spinner
//       ) : expandedItem ? (
//         <ExpandedView item={expandedItem} onClose={() => setExpandedItem(null)} />
//       ) : (
//         <Grid container spacing={2} className="grid-container">
//           {users.map((user) => (
//             <Grid item xs={12} sm={6} md={4} key={user.id} onClick={() => handleExpand(user)} className="tile">
//               <Card variant="outlined" style={{ height: '100%', width: '100%' }} className="tileCard">
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     {user.name}
//                   </Typography>
//                   <Typography variant="p" color="textSecondary">
//                     {user.username}
//                   </Typography>
//                   <Typography variant="body2">
//                     {user.email}
//                   </Typography>
//                 </CardContent>
//                 <CardActions className="tile-icons">
//                   <IconButton
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent triggering the expand function
//                     }}
//                   >
//                     <Edit />
//                   </IconButton>
//                   <IconButton
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent triggering the expand function
//                       handleFlagClick(user.id);
//                     }}
//                   >
//                     <Flag className={`flag-icon ${flaggedUsers[user.id] ? 'flagged' : ''}`} />
//                   </IconButton>
//                   <IconButton
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent triggering the expand function
//                       handleDelete(user.id);
//                     }}
//                   >
//                     <Delete />
//                   </IconButton>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default TileView;
