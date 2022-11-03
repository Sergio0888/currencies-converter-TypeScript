import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IRatesSelector {
  onChange: (str: string) => void
}

const RatesSelector = (props: IRatesSelector) => {
  const {onChange} = props;
  const [baseCurrency, setbaseCurrency] = useState('UAH');

  const handleChange = (e: SelectChangeEvent<string>) => {
    setbaseCurrency(e.target.value);
    onChange(e.target.value)
  };

  return (
    <Box 
    sx={{
      width: 90
    }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Base</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={baseCurrency}
          label="Base"
          onChange={handleChange}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="TRY">TRY</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RatesSelector;