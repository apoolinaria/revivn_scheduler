import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import useSchedulerStore from './stateStore.js';

export default function DateSelector() {
  const [value, setValue] = React.useState(null);
  const date = useSchedulerStore((state) => state.scheduled);
  const updateDate = useSchedulerStore((state) => state.updateDate);

  return (
    <div
      style={{
        marginLeft: '2%',
        display: 'flex',
        flexDirection: 'row',
        flexBasis: '35%',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            updateDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <FormControlLabel
        style={{ marginLeft: '2%' }}
        control={<Checkbox defaultChecked />}
        label="Im flexible +/- 3days"
      />
    </div>
  );
}
