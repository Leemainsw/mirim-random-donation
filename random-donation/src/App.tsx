import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

import DonationInfo from "./page/DonationInfo";
import Rank from "./page/Rank";
import Result from "./page/Result";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DonationInfo />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
