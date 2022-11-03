import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IRatesForm {
    quotes: {
        [key: string]: number
    }
}
const RatesForm = (props: IRatesForm) => {
    
    const {quotes} = props;
    const arrayOfRates = Object.entries(quotes);
    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Rate</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {arrayOfRates.map((item) => (
                <TableRow
                key={nanoid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item[0].slice(-3)}
                </TableCell>
                <TableCell align="right">{item[1]}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
};

export default RatesForm;