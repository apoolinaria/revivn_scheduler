import React from 'react'
import {Card, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 450,
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

  return (
  <Card className={classes.root}>
    <Typography sx={{ fontSize: 22 }} color="text.prirmary" gutterBottom>
        {props.pickup.location}
      </Typography>
      {/* <hr style={{marginLeft: '5%', marginRight: '5%'}}/> */}
  </Card>

  )
}
