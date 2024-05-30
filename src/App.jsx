import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Kart } from "./Kart";
import { Address } from "./Address";
export const App = () => {
  let [kart, setKart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home kart={kart} setKart={setKart}></Home>}
          ></Route>

          <Route
            path="/kart"
            element={<Kart kart={kart} setKart={setKart}></Kart>}
          ></Route>
          <Route path="/delivery" element={<Address></Address>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
