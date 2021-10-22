import React from 'react';
import TextField from '@mui/material/TextField';



export default function LocationSelect () {
  return (
    <TextField
    style={{marginLeft:'2%', flexBasis: '40%'}}
    required
    id="outlined-required"
    label="Location"
    defaultValue="Adress"
  />
  )
}