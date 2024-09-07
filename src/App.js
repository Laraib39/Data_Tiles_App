import React from 'react';
import { Container, Grid } from '@mui/material';
import GridView from './Components/GridView';  // Use GridView instead of TileView
import HorizontalMenu from './Components/HorizontalMenu'; // Import the new Horizontal Menu
import './css/style.css';

const App = () => {
  return (
    <div>
      {/* Horizontal Menu */}
      <HorizontalMenu />  {/* Use the new horizontal menu */}

      {/* Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Tile View or Expanded View */}
          <Grid item xs={12}>
            <GridView />  {/* Use GridView to handle tile and expanded view */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
