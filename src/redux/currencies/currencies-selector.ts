import { IState } from "../../types/type";



export const fetchData = (state: IState) => state.data;
export const isLoading = (state: IState) => state.loading;
export const fetchRates = (state: IState) => state.rates;