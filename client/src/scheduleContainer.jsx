import React from 'react';
import { Paper, Box, Grid, Button } from '@mui/material'
import LocationSelect from './LocationSelect.jsx'
import DateSelector from './DateSelect.jsx'

export default function ScheduleContainer () {
  return (
    <div style={{display:'flex', flexDirection: 'row',flexFlow: 'wrap', margin: '2%', height:'60px'}}>
      <LocationSelect />
      <DateSelector />
      <Button style={{flexBasis: '5%'}} variant="contained">Sumbit</Button>
    </div>
  )
}