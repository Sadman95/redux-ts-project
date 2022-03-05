import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../../pages/home/index";

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
