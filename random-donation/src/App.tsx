import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./component/GlobalStyles";

import DonationInfo from "./page/DonationInfo";
import Load from "./page/Load";
import Result from "./page/Result";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DonationInfo />} />
          <Route path="/result" element={<Result />} />
          <Route path="/load" element={<Load />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
