import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getConvert, getRates } from '../../api/currencies';
import { ICalculated, IData, IRates } from "../../types/type";


export const getChange = createAsyncThunk<IData, ICalculated, { rejectValue: string}>(
    "change",
    async (data, { rejectWithValue }) => {
        try {
           const response = await getConvert(data);
           if(!response.success) {
            Notiflix.Report.failure('You entered incorrect data', 'Please enter "15 usd in uah", "200 eur in usd"', 'Ok');
           }
           return response as IData;
        } 
        catch (error: any) {
           return rejectWithValue(error);
        }
    }
)

export const getCurrentRates = createAsyncThunk<IRates, string, { rejectValue: string}>(
    "rates",
    async (source, { rejectWithValue }) => {
        try {
           const response = await getRates(source);
           return response as IRates;
        } 
        catch (error: any) {
           return rejectWithValue(error);
        }
    }
)