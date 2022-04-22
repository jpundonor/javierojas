import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/navbar/Navbar";

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
