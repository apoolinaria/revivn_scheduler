import React from 'react';
import { Paper, Box, Grid, Button } from '@mui/material'
import LocationSelect from './LocationSelect.jsx'
import DateSelector from './DateSelect.jsx'
import useSchedulerStore from './stateStore.js'

export default function ScheduleContainer () {
const createPickUp = useSchedulerStore((state) => state.createPickUp)
const loaction = useSchedulerStore((state) => state.location)
const date = useSchedulerStore((state) => state.scheduled)
const flexible = useSchedulerStore((state) => state.flexible)

let newPickup = {adress: loaction, scheduled:date, flexible: flexible}

const handleSubmit = () => {
  createPickUp(newPickup)
}
  return (
    <div style={{display:'flex', flexDirection: 'row',flexFlow: 'wrap', margin: '2%', height:'60px'}}>
      <LocationSelect />
      <DateSelector />
      <Button onClick={handleSubmit} style={{flexBasis: '5%'}} variant="contained">Submit</Button>
    </div>
  )
}