import React from "react";
import { useEffect, useState } from "react";
import Notiflix from 'notiflix';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

import { ICalculated } from "../../types/type";

interface IExchangeForm {
  isCalculation: (calc: ICalculated) => void
}

const initialState: ICalculated = {
  amount: 0,
  from: '',
  to: ''
};


const ExchangeForm: React.FC<IExchangeForm> = ({isCalculation}) => {

  const [inputValue, setInputValue] = useState('');
  const [calculation, setcalculation] = useState(initialState);
  const arrayOfValue = inputValue.split(' ');
  
  useEffect(() => {

    if(arrayOfValue.length === 4) {
      const amount = Number(arrayOfValue[0]);
      const from = arrayOfValue[1].toUpperCase();
      const to = arrayOfValue[3].toUpperCase();
      setcalculation({
        amount,
        from,
        to
      })
    // eslint-disable-next-line
  }}, [inputValue])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const {target} = e;
   if (target.value.length === 0) {
    setcalculation(initialState);
   }
   return setInputValue(target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(arrayOfValue.length === 4) {
      isCalculation(calculation);
      return (setInputValue(''),
      setcalculation(initialState));
    }
    Notiflix.Report.failure('You entered incorrect data', 'Please enter "15 usd in uah", "200 eur in usd"', 'Ok');
    return (setInputValue(''),
            setcalculation(initialState));
  };

    return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
      component="form"
      onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            minWidth: 250,
            marginBottom: 1
          }}
          label='Please enter "15 usd in uah"'
          variant="outlined"
          value={inputValue}
          onChange={handleChange}/>
        
        <Button 
        type='submit' 
        sx={{
          alignSelf: 'center',
          width: 100
        }}
        variant="contained">
        Click</Button>
      </Box>
    )
};

export default ExchangeForm;