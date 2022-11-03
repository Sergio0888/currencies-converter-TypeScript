import axios from "axios";
import { ICalculated } from "../types/type"

const instance = axios.create({
    baseURL: "https://api.apilayer.com/currency_data",
    headers: {
        apikey: "CglOqQVWwJyaeK1T1Ge8kkQemwmufX31"
    }
})

export const getConvert = async(props: ICalculated) => {
    const { to, from, amount } = props;
    const {data} = await instance.get("/convert", {
        params: {
            to,
            from,
            amount
        }
    })
    return data;
}

export const getRates = async(source: string) => {
    const {data} = await instance.get("/live", {
        params: {
            source,
            currencies: 'EUR%2CUSD%2CUAH%2CPLN%2CGBP%2CTRY',
        }
    })
    return data;
}