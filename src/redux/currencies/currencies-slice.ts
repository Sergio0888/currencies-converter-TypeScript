import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getChange, getCurrentRates } from './currencies-operations';
import { IState } from "../../types/type";

const initialState: IState = {
    data: {
        result: 0,
        query: {
            to: '',
        }
    },
    rates: {
        success: false,
        quotes: {},
    },
    loading: false,
    error: null,
  };

const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getChange.pending, (store) => {
            store.loading = true;
            store.error = null;
        })
        .addCase(getChange.fulfilled, (store, action) => {
            store.loading = false;
            store.data = action.payload;
        })
        .addCase(getCurrentRates.pending, (store) => {
            store.loading = true;
            store.error = null;
        })
        .addCase(getCurrentRates.fulfilled, (store, action) => {
            store.loading = false;
            store.rates = action.payload;
        })
        .addMatcher(isError, (store, action: PayloadAction<string>) => {
            store.error = action.payload;
            store.loading = false;
        })
    },
});

export default currenciesSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
  }

// [getChange.pending]: (store) => {
//     store.loading = true;
//     store.error = null;
// },
// [getChange.fulfilled]: (store, action) => {
//     store.loading = false;
//     store.data = action.payload;
// },
// [getChange.rejected]: (store, action) => {
//     store.loading = false;
//     store.error = action.payload;
// },
// [getCurrentRates.pending]: (store) => {
//     store.loading = true;
//     store.error = null;
// },
// [getCurrentRates.fulfilled]: (store, action) => {
//     store.loading = false;
//     store.rates = action.payload;
// },
// [getCurrentRates.rejected]: (store, action) => {
//     store.loading = false;
//     store.error = action.payload;
// }