import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
