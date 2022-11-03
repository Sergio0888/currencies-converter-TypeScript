import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook"; 

import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import SwapForm from "../../components/SwapForm/SwapForm";

import { getChange } from "../../redux/currencies/currencies-operations";
import { fetchData } from "../../redux/currencies/currencies-selector";
import { ICalculated } from "../../types/type";

import styles from "./ExchangePage.module.scss";

const ExchangePage: React.FC = () => {

  const res = useAppSelector(fetchData);
  const dispatch = useAppDispatch();

  const isCalculation = (props: ICalculated) => {
    const { amount, to, from } = props;
    dispatch(getChange({
      amount,
      from,
      to
    }))
  }
    return (
        <div className={styles.main_box}>
            <ExchangeForm isCalculation={isCalculation}/>
            {res.result > 0 && <SwapForm result={res.result} query={res.query.to} />}
      </div> 
    )
};

export default ExchangePage;