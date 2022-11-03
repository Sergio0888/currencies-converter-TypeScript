import React from "react";
import {Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "../components/Loader/Loader";

const ExchangePage = lazy(() => import("./ExchangePage/ExchangePage"));
const RatesPage = lazy(() => import("./RatesPage/RatesPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<ExchangePage />} />
                <Route path="/rates" element={<RatesPage />} />
            </Routes>
        </Suspense>
    )
};

export default UserRoutes;