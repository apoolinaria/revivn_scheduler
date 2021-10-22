import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PickupTile from './PickupTile.jsx';
import { sampleData } from './sample.js';

export default function PickupContainer() {
  return (
    <div style={{ display: 'flex', flexFlow: 'wrap', margin: '2%' }}>
      {sampleData.map((pickup) => (
        <PickupTile pickup={pickup} />
      ))}
    </div>
  );
}
