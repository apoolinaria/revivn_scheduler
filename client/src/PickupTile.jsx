import React from 'react'
import {Card, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 300,
    marginBottom: '20px',
    position: 'relative',
    flexBasis: '25%',
    padding: theme.spacing(2, 4, 3),
    margin: '2%'

  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function PickupTile (props) {
  const classes = useStyles();
  const currentPickup = props.pickup
  const steps = [
    `Pickup was scheduled for ${currentPickup.scheduled}`,
    'Pickup in progress',
    'Recycled',
  ];

  return (
  <Card className={classes.root}>
    <Typography sx={{ fontSize: 26 }} color="text.primary" gutterBottom>
        {currentPickup.location}
      </Typography>
      <hr style={{marginLeft: '1%', marginRight: '1%'}}/>
      <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        {currentPickup.address}
      </Typography>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        {currentPickup.notes}
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currentPickup.status} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  </Card>

  )
}
