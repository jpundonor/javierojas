import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../components/views/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
