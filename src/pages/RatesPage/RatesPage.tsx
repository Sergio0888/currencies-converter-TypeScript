import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { useEffect } from "react";
import { fetchRates } from "../../redux/currencies/currencies-selector";

import RatesForm from "../../components/RatesForm/RatesForm";
import RatesSelector from "../../components/RatesSelector/RatesSelector";
import { Loader } from "../../components/Loader/Loader";

import { getCurrentRates } from "../../redux/currencies/currencies-operations";

import styles from "./RatesPage.module.scss";

const RatesPage: React.FC = () => {
    
    const dispatch = useAppDispatch();
    const res = useAppSelector(fetchRates);

    useEffect(() => {
        const source = 'UAH';
        dispatch(getCurrentRates(source))
    // eslint-disable-next-line
    },[])

    const selectedBase = (source: string) => {
        dispatch(getCurrentRates(source))
    }
    
    return (
        <div className={styles.main_box}>
            {res.success ? <>
                <RatesSelector onChange={selectedBase}/>
                <RatesForm quotes={res.quotes}/>
            </> : <Loader />}
        </div>
    )
};

export default RatesPage;