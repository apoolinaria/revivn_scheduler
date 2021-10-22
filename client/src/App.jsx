import React from 'react';
import ScheduleContainer from './scheduleContainer.jsx'
import PickupContainer from './PickupsContaioner.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
 <ThemeProvider theme={theme} >
    <ScheduleContainer/>
    <PickupContainer/>
  </ThemeProvider>
  )
}

export default App;