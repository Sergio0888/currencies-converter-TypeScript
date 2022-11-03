import React from "react";
import { useAppSelector } from "../../hooks/hook"; 
import Typography from "@mui/material/Typography";
import { isLoading } from "../../redux/currencies/currencies-selector";
import { Loader } from "../Loader/Loader";

interface ISwapForm {
    result: number,
    query: string
}

const SwapForm = (props: ISwapForm) => {
    const loading = useAppSelector(isLoading);
    const { result, query } = props;
    return (
        <>
        {loading && <Loader />}
            {result > 0 && 
            <Typography
            sx={{
                fontSize: 25,
                marginTop: 3
            }}
            variant="h6"
            gutterBottom
            component="p"
        >
           You will receive {result.toFixed(1)} {query}
        </Typography>} 
        </>
        
    )
};

export default SwapForm;