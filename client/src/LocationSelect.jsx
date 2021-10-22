import React from 'react';
import TextField from '@mui/material/TextField';
import useSchedulerStore from './stateStore.js';
/*
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

this library utilises google maps api to create an autocomplete of the adress input
the implementation looks pretty easy and I tested in in codesandbox, worked really well

on select of the suggested adress it will get saved in zustand
if the user clicks away from the suggestion box the on change is reset back to empty string

*/

export default function LocationSelect() {
  // this function is called on select of the suggested address and saves it to state
  const updateLocation = useSchedulerStore((state) => updateLocation.flexible);
  return (
    <TextField
      style={{ marginLeft: '2%', flexBasis: '40%' }}
      required
      id="outlined-required"
      label="Location"
      defaultValue="Adress"
    />
  );
}
